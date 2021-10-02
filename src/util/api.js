export const fetchCurrentUser = () =>
  fetch(process.env.REACT_APP_API_HOME, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  }).then((res) => res.json());
