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

const buyCoin = (symbol, quantity) => {
  const body = {
    symbol: symbol,
    quantity: quantity,
    price: 123,
  };

  fetch(`${process.env.REACT_APP_API}/user/buy`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  });
};

export { fetchCurrentUser, buyCoin };
