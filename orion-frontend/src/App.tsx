import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AddressList } from './components/AddressList';
import { ClientList } from './components/ClientList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path='/' element={<ClientList />} />
      <Route path='/address/:id' element={<AddressList />} />
    </Routes>
  );
}

export default App;
