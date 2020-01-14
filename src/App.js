import React from 'react';

import { Admin, Resource } from 'react-admin';
import UsersProvider from './providers/usersProvider';
import FirebaseAuthProvider from './providers/firebaseAuthProvider';
import firebaseConfig from './firebaseConfig';

import users from './components/users';
import CustomLogin from './components/Login';
import CustomLayout from './components/Layout';

const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = UsersProvider();

const App = () => (
  <Admin
    loginPage={CustomLogin}
    layout={CustomLayout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name='users' {...users} />
  </Admin>
);

export default App;
