export type ClientType = {
  id: string;
  firstName: string;
  birthDate: string;
  lastName: string;
  email: string;
};

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

export const getClient = async (id: string) => {
  return (await (
    await fetch('http://localhost/api/v1/client/get-client', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ id }),
    })
  ).json()) as ClientType;
};

export const getClientAddress = async (id: string) => {
  return await (
    await fetch('http://localhost/api/v1/client/get-client-address', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ clientId: id }),
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

export const editClient = async (
  id: string,
  firstName: string,
  birthDate: string,
  lastName: string,
  email: string
) => {
  return await fetch('http://localhost/api/v1/client/edit-client', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ id, firstName, birthDate, lastName, email }),
  });
};

export const createClient = async (
  firstName: string,
  birthDate: string,
  lastName: string,
  email: string
) => {
  return await fetch('http://localhost/api/v1/client/create-client', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ firstName, birthDate, lastName, email }),
  });
};

export const createAdress = async (
  clientId: string,
  street: string,
  city: string,
  zipCode: string,
  country: string
) => {
  return await fetch('http://localhost/api/v1/client/add-address', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ clientId, street, city, zipCode, country }),
  });
};

export const deleteAddress = async (addressId: string) => {
  return await fetch('http://localhost/api/v1/address/delete', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ addressId }),
  });
};

export const editAddress = async (
  id: string,
  street: string,
  city: string,
  zipCode: string,
  country: string
) => {
  return await fetch('http://localhost/api/v1/address/edit', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ id, street, city, zipCode, country }),
  });
};

export const getAddress = async (id: string) => {
  return await (
    await fetch('http://localhost/api/v1/address/get', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ id }),
    })
  ).json();
};
