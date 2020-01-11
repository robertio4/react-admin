import React, { useState } from 'react';
import { useLogin } from 'react-admin';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Login } from 'react-admin';

const CustomLoginForm = () => {
  const [loading, setLoading] = useState(false);

  const login = useLogin();

  const handleLogin = async firebaseAuth => {
    setLoading(true);
    login(firebaseAuth);
  };

  return (
    <div>
      <CardActions>
        <Button
          variant='raised'
          type='submit'
          color='primary'
          onClick={() => handleLogin('facebook')}
          disabled={loading}
        >
          {loading && <CircularProgress size={18} thickness={2} />}
          Login With Facebook
        </Button>
      </CardActions>
      {/* <CardActions>
        <Button
          variant='raised'
          type='submit'
          color='primary'
          onClick={() => handleLogin('twitter')}
          disabled={loading}
        >
          {loading && <CircularProgress size={18} thickness={2} />}
          Login With Twitter
        </Button>
      </CardActions>
      <CardActions>
        <Button
          variant='raised'
          type='submit'
          color='primary'
          onClick={() => handleLogin('google')}
          disabled={loading}
        >
          {loading && <CircularProgress size={18} thickness={2} />}
          Login With Google
        </Button>
      </CardActions> */}
    </div>
  );
};

const CustomLogin = () => (
  <Login
    children={<CustomLoginForm />}
    backgroundImage='https://free-pptbackgrounds.com/wp-content/uploads/2019/08/background-blue-ppt-backgrounds-850x623.png'
  />
);

export default CustomLogin;
