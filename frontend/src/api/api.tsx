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

export const deleteClient = async (id: string) => {
  return await fetch('http://localhost/api/v1/client/delete', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ clientId: id }),
  });
};
