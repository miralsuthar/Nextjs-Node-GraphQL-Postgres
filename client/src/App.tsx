import React from 'react';
import { createClient, Provider } from 'urql';


import './App.css';
import CreateUser from './components/CreateUser';
import ListOfUsers from './components/ListOfUsers';
import UpdatePassword from './components/UpdatePassword';

function App() {

  const client = createClient({
    url: 'http://localhost:5000/graphql',
  });
  return (
    <>
    <Provider value={client}>
      <CreateUser />
      <ListOfUsers />
      <UpdatePassword />
    </Provider>
    </>
  );
}

export default App;
