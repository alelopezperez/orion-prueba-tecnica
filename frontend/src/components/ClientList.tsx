import { useEffect, useState } from 'react';
import { getAllClients } from '../api/api';

export const ClientList = () => {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const getClients = async () => {
      const res = await getAllClients();
      console.log(res);
    };

    getClients();
  }, []);

  return (
    <div>
      <input
        className='border-solid ...'
        type='text'
        placeholder='Search here'
        onChange={(e) => {
          e.preventDefault();
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />
    </div>
  );
};
