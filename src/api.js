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

const getCoinListString = (wallet) => {
  const coinIds = [];

  for (const coin of wallet) {
    coinIds.push(coin.symbol);
  }

  return coinIds.toString();
};

const getCoinPrices = async (ids) => {
  const prices = [];

  const baseUrl = 'https://api.nomics.com/v1/currencies/ticker';

  const coins = await fetch(
    `${baseUrl}?key=${process.env.REACT_APP_NOMICS_API_KEY}&ids=${ids}&interval=1d`
  ).then((res) => res.json());

  console.log(coins);

  for (const coin of coins) {
    prices.push(coin.price);
  }

  return prices;
};

const fetchWalletData = async (wallet) => {
  const newWallet = [];

  const ids = getCoinListString(wallet);
  const prices = await getCoinPrices(ids);

  for (let i = 0; i < wallet.length; i++) {
    const { symbol, quantity, amountInvested } = wallet[i];
    const currentPrice = prices[i];

    const profit = currentPrice * quantity - amountInvested;
    const profitPct = (profit / amountInvested) * 100;

    const newCoin = {
      symbol,
      quantity,
      amountInvested: amountInvested.toFixed(2),
      currentPrice:
        Math.round((Number(currentPrice) + Number.EPSILON) * 100) / 100,
      profit: profit.toFixed(2),
      profitPct: profitPct.toFixed(2),
    };

    newWallet.push(newCoin);
  }

  return newWallet;
};

export { fetchCurrentUser, buyCoin, sellCoin, fetchWalletData };
