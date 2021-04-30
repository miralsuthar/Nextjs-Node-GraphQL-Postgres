import React from 'react';
import { createClient, Provider } from 'urql';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import './App.css';
import CreateUser from './components/CreateUser';

function App() {

  



  const client = createClient({
    url: 'http://localhost:5000/graphql',
  });
  return (
    <>
    <Provider value={client}>
      <CreateUser />
    </Provider>
    </>
  );
}

export default App;
