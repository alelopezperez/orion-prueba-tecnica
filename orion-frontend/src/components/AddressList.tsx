import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ClientType,
  deleteAddress,
  deleteClient,
  getAllClients,
  getClient,
  getClientAddress,
} from '../api';
import { ModalEditAddress } from './ModalEditAddress';
import { ModalNewAddress } from './ModalNewAddress';

export const AddressList = () => {
  const [searchInput, setSearchInput] = useState('');
  const [address, setAddress] = useState<any[]>();
  const [client, setClient] = useState<ClientType>();
  const [showModalNew, setShowModalNew] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  const id = useParams();

  useEffect(() => {
    const getClients = async () => {
      if (id.id !== undefined) {
        const res = await getClientAddress(id?.id);
        console.log(res);
        setAddress(res);
      }
    };
    const getUniClient = async () => {
      console.log(id.id);
      if (id.id !== undefined) {
        console.log('holxa');
        console.log(id);
        const res = await getClient(id?.id);
        console.log(res);
        setClient(res);
      }
    };

    getClients();
    getUniClient();
  }, []);

  return (
    <div className=''>
      <h1>
        Listas de Dirreciones de {client?.firstName} {client?.lastName}
      </h1>

      <input
        className='border border-black rounded'
        type='text'
        placeholder='Search here'
        onChange={(e) => {
          e.preventDefault();
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />

      <button
        onClick={async () => {
          setShowModalNew(true);
        }}
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Agregar Nueva Dirreccion
        <svg
          aria-hidden='true'
          className='w-4 h-4 ml-2 -mr-1'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        ></svg>
      </button>
      <ModalNewAddress
        showModal={showModalNew}
        setShowModal={setShowModalNew}
        fname={client?.firstName === undefined ? '' : client?.firstName}
        lname={client?.lastName === undefined ? '' : client?.lastName}
        id={client?.id === undefined ? '' : client?.id}
      />

      <div className=''>
        {address
          ?.filter((item) => {
            const name: string = item.street;

            return name.toLowerCase().includes(searchInput.toLocaleLowerCase());
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {item.street}
                  </h5>
                  <h6 className='mb-2 text-2m  tracking-tight text-gray-900 dark:text-white'>
                    {item.city}
                  </h6>
                  <h6 className='mb-2 text-2m  tracking-tight text-gray-900 dark:text-white'>
                    {item.country}
                  </h6>
                  <h6 className='mb-2 text-2m  tracking-tight text-gray-900 dark:text-white'>
                    {item.zipCode}
                  </h6>
                  <button
                    id={item.id}
                    onClick={async (e) => {
                      const btId = e.currentTarget.id;
                      deleteAddress(item.id);
                      setAddress(
                        address?.filter((item) => {
                          const id: string = item.id;
                          console.log(id);
                          if (client?.id !== undefined) {
                            console.log(client?.id);
                            console.log(item.id);
                          }
                          return !(id === btId);
                        })
                      );
                    }}
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Borrar
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 ml-2 -mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    ></svg>
                  </button>{' '}
                  <a
                    href={`${window.location.toString()}/${item.id}`}
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Editar
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 ml-2 -mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
      </div>

      <ModalEditAddress
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
      />
    </div>
  );
};
