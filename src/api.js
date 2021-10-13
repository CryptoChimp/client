const fetchCurrentUser = () =>
  fetch(`${process.env.REACT_APP_API}/user`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  });

const buyCoin = async (symbol, quantity) => {
  const baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  const URL = `${baseUrl}?key=${process.env.REACT_APP_NOMICS_API_KEY}&ids=${symbol}&interval=1d`;

  const price = await fetch(URL)
    .then((res) => res.json())
    .then((res) => {
      if (res.length === 0) {
        return 0;
      }

      return res[0].price;
    });

  return await fetch(`${process.env.REACT_APP_API}/user/buy`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      symbol: symbol,
      quantity: quantity,
      price: price,
    }),
  }).then((res) => res.json());
};

const sellCoin = async (symbol) => {
  const baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  const URL = `${baseUrl}?key=${process.env.REACT_APP_NOMICS_API_KEY}&ids=${symbol}&interval=1d`;

  const price = await fetch(URL)
    .then((res) => res.json())
    .then((res) => res[0].price);

  return await fetch(`${process.env.REACT_APP_API}/user/sell`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      symbol: symbol,
      price: price,
    }),
  }).then((res) => res.json());
};

/*
const calculateWalletData = async (wallet) => {
  const baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
  const newWallet = [];

  for (const coin of wallet) {
    const { symbol, quantity, amountInvested } = coin;
    const URL = `${baseUrl}?key=${process.env.REACT_APP_NOMICS_API_KEY}&ids=${symbol}&interval=1d`;

    const currentPrice = fetch(URL)
      .then((res) => res.json())
      .then((res) => res[0].price);

    const profit = currentPrice * quantity - amountInvested;
    const profitPct = (profit / amountInvested) * 100;

    const newCoin = {
      symbol,
      quantity,
      amountInvested: amountInvested.toFixed(2),
      currentPrice: currentPrice,
      profit: profit.toFixed(2),
      profitPct: profitPct.toFixed(2),
    };

    newWallet.push(newCoin);
  }

  return await Promise.all(newWallet);
};
 */

const fetchCoinPrices = async (coins) => {
  let promises = [];
  const baseUrl = 'https://api.nomics.com/v1/currencies/ticker';

  for (const coin of coins) {
    promises.push(
      fetch(
        `${baseUrl}?key=${process.env.REACT_APP_NOMICS_API_KEY}&ids=${coin.symbol}&interval=1d`
      )
        .then((res) => res.json())
        .then((res) => res[0].price)
    );
  }

  return await Promise.all(promises);
};

export { fetchCurrentUser, buyCoin, sellCoin, fetchCoinPrices };
