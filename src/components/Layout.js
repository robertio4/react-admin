import React from 'react';
import { Layout, AppBar, UserMenu } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { EmailField } from 'react-admin';

const CustomUserMenu = props => {
  const currentUser = firebase.auth().currentUser;

  const icon =
    currentUser && currentUser.photoURL ? (
      <Avatar src={currentUser.photoURL} className='avatar' />
    ) : (
      undefined
    );

  return (
    <UserMenu
      {...props}
      className='user-menu'
      label={currentUser ? currentUser.displayName : 'Unknown'}
      icon={icon}
    >
      <EmailField
        record={currentUser}
        source='email'
        data-toggle='tooltip'
        title={currentUser ? currentUser.email : ''}
      />
    </UserMenu>
  );
};

const CustomAppBar = props => {
  return <AppBar {...props} userMenu={<CustomUserMenu />} />;
};

const CustomLayout = props => <Layout {...props} appBar={CustomAppBar} />;

export default CustomLayout;
