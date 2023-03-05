export const getAllClients = async () => {
  return await (
    await fetch('http://localhost/api/v1/client/get-clients', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
    })
  ).json();
};
