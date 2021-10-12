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

export { fetchCurrentUser };
