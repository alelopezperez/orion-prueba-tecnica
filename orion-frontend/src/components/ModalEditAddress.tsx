import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  createAdress,
  createClient,
  editAddress,
  editClient,
  getAddress,
  getClient,
} from '../api';

export type ModalType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalEditAddress = ({ showModal, setShowModal }: ModalType) => {
  useEffect(() => {
    const getClientes = async () => {
      console.log(urlParams.id);
      console.log(urlParams.adId);

      if (urlParams.id !== undefined && urlParams.adId !== undefined) {
        setShowModal(true);
        const cl = await getClient(urlParams.id);
        const ubi = await getAddress(urlParams.adId);

        setFname(cl.firstName);
        setLname(cl.lastName);
        setclid(cl.id);

        setCity(ubi.city);
        setStreet(ubi.street);
        setZipCode(ubi.zipCode);
        setCountry(ubi.country);
        setAddressId(ubi.id);
      }
    };

    getClientes();
  }, []);

  const urlParams = useParams();
  const [clid, setclid] = useState('');

  const [addressId, setAddressId] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZipCode] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  return showModal ? (
    <div>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>
                Editar Dirreccion de {fname} {lname}
              </h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setShowModal(false)}
              >
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'></span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    type='email'
                    name='floating_email'
                    id='floating_email'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                    value={street}
                    onChange={(e) => {
                      setStreet(e.target.value);
                    }}
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                    Calle
                  </label>
                </div>

                <div className='grid md:grid-cols-2 md:gap-6'>
                  <div className='relative z-0 w-full mb-6 group'>
                    <input
                      type='text'
                      name='floating_first_name'
                      id='floating_first_name'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                      required
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Ciudad
                    </label>
                  </div>
                  <div className='relative z-0 w-full mb-6 group'>
                    <input
                      type='text'
                      name='floating_last_name'
                      id='floating_last_name'
                      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                      placeholder=' '
                      required
                      value={zip}
                      onChange={(e) => {
                        setZipCode(e.target.value);
                      }}
                    />
                    <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                      Codigo Postal
                    </label>
                  </div>
                </div>
                <div className='relative z-0 w-full mb-6 group'>
                  <input
                    name='floating_password'
                    id='floating_password'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                    Pais
                  </label>
                </div>
                <div className='grid md:grid-cols-2 md:gap-6'></div>
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type='submit'
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    onClick={async (e) => {
                      await editAddress(addressId, street, city, zip, country);
                      setShowModal(false);

                      window.location.replace(`/address/${clid}`);
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </div>
  ) : null;
};
