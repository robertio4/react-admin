import React, { useState, useEffect, useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const FirebaseAuthProvider = (firebaseConfig: {}) => {
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  const handleAuthLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const { user } = await auth.signInWithPopup(provider);
      console.log('HandleAuthLogin: user sucessfully logged in', user);
      localStorage.setItem('token', JSON.stringify('adfasd'));
      return user;
    } catch (error) {
      console.log('HandleAuthLogin: invalid credentials');
      throw new Error('Login error: invalid credentials');
    }
  };

  const handleAuthLogout = () => {
    return auth.signOut();
  };

  const handleAuthError = error => {
    console.log('HandleAuthLogin: invalid credentials', error);
    return Promise.reject('Login error: invalid credentials');
  };

  const handleAuthCheck = () => {
    return new Promise((resolve, reject) => {
      if (auth.currentUser) return resolve(auth.currentUser);
      const unsubscribe = auth.onAuthStateChanged(user => {
        unsubscribe();
        if (user) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  };
  //auth.currentUser ? Promise.resolve() : Promise.reject();

  const handleGetPermissions = params => Promise.resolve();

  return {
    login: params => handleAuthLogin(params),
    logout: () => handleAuthLogout(),
    checkAuth: () => handleAuthCheck(),
    checkError: error => handleAuthError(error),
    getPermissions: () => handleGetPermissions()
  };
};

export default FirebaseAuthProvider;
