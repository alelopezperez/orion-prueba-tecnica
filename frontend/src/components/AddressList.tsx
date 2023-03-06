import { useEffect, useState } from 'react';
import { deleteClient, getAllClients } from '../api/api';
import { cid } from '../noteStore';

export const AddressList = () => {
  const [searchInput, setSearchInput] = useState('');
  const [clients, setClients] = useState<any[]>();

  useEffect(() => {
    console.log('hola');
    console.log(cid);
    const getClients = async () => {
      const res = await getAllClients();
      console.log(res);
      setClients(res);
    };

    getClients();
  }, []);

  return (
    <div className=''>
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
                  <button className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
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
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
