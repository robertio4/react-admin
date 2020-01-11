import React from 'react';
import { Layout, AppBar, UserMenu } from 'react-admin';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

const CustomUserMenu = props => {
  const currentUser = firebase.auth().currentUser;
  const classes = useStyles();

  const icon =
    currentUser && currentUser.photoURL ? (
      <Avatar src={currentUser.photoURL} className={classes.small} />
    ) : (
      undefined
    );

  return (
    <UserMenu
      {...props}
      label={
        currentUser ? (
          <div>
            {currentUser.displayName} <br />
            {currentUser.email}
          </div>
        ) : (
          'Unknown'
        )
      }
      icon={icon}
    />
  );
};

const CustomAppBar = props => {
  return <AppBar {...props} userMenu={<CustomUserMenu />} />;
};

const CustomLayout = props => <Layout {...props} appBar={CustomAppBar} />;

export default CustomLayout;
