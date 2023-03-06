import { useEffect, useState } from 'react';
import { deleteClient, getAllClients } from '../api';
import { Modal } from './Modal';
import { ModalNewClient } from './ModalNewClient';

export const ClientList = () => {
  const [searchInput, setSearchInput] = useState('');
  const [clients, setClients] = useState<any[]>();
  const [showModalAdd, setShowModalAdd] = useState(false);

  const [showModalNew, setShowModalNew] = useState(false);

  useEffect(() => {
    const getClients = async () => {
      const res = await getAllClients();
      console.log(res);
      setClients(res);
    };

    getClients();
  }, []);

  return (
    <div className=''>
      <h1>Lista de Clientes</h1>
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
      {'        '}
      <button
        onClick={async () => {
          setShowModalNew(true);
        }}
        className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Agregar Nuevo Cliente
        <svg
          aria-hidden='true'
          className='w-4 h-4 ml-2 -mr-1'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        ></svg>
      </button>
      <ModalNewClient showModal={showModalNew} setShowModal={setShowModalNew} />
      <div className=''>
        {clients
          ?.filter((item) => {
            const name: string = item.firstName;

            return name.toLowerCase().includes(searchInput.toLocaleLowerCase());
          })
          .map((item) => {
            return (
              <div key={item.id}>
                <div className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {item.firstName}
                  </h5>
                  <button
                    id={item.id}
                    onClick={async (e) => {
                      const btId = e.currentTarget.id;
                      console.log(btId);
                      await deleteClient(e.currentTarget.id);
                      setClients(
                        clients?.filter((item) => {
                          const id: string = item.id;

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
                  <button
                    id={item.id}
                    onClick={async () => {
                      setShowModalAdd(true);
                    }}
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Editar Cliente
                    <svg
                      aria-hidden='true'
                      className='w-4 h-4 ml-2 -mr-1'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    ></svg>
                  </button>
                  <Modal
                    id={item.id}
                    showModal={showModalAdd}
                    setShowModalAdd={setShowModalAdd}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    birthday={item.birthDate}
                    em={item.email}
                  />
                  {'                                                   '}
                  <a
                    id={item.id}
                    href={`/address/${item.id}`}
                    className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Ver Direcciones
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
    </div>
  );
};
