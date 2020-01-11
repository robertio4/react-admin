import React from 'react';

import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import usersProvider from './providers/usersProvider';
import FirebaseAuthProvider from './providers/firebaseAuthProvider';
import firebaseConfig from './firebaseConfig';

import AgregarUsuario from './components/AgregarUsuario';
import ListadoUsuarios from './components/ListadoUsuarios';
import CustomLogin from './components/Login';
import CustomLayout from './components/Layout';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const authProvider = FirebaseAuthProvider(firebaseConfig);

const App = () => (
  <Admin
    dataProvider={usersProvider}
    loginPage={CustomLogin}
    authProvider={authProvider}
    layout={CustomLayout}
  >
    <Resource name='users' list={ListadoUsuarios} />
  </Admin>
);

export default App;
