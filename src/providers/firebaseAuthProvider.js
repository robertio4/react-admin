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
      return user;
    } catch (error) {
      console.log('HandleAuthLogin: invalid user');
      throw new Error('Login error: invalid credentials');
    }
  };

  const handleAuthLogout = () => {
    return auth.signOut();
  };

  const handleAuthError = error => {
    console.log('HandleAuthLogin: invalid user', error);
    return Promise.reject('Login error: invalid user');
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
