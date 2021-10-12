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
    .then((res) => res[0].price);

  fetch(`${process.env.REACT_APP_API}/user/buy`, {
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
  });
};

export { fetchCurrentUser, buyCoin };
