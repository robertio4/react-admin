import React, { useState } from 'react';
import { useLogin, Login } from 'react-admin';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const CustomLoginForm = props => {
  const [loading, setLoading] = useState(false);
  const login = useLogin();

  const handleLogin = async firebaseAuth => {
    setLoading(true);
    login(firebaseAuth);
  };

  return (
    <div className='login'>
      <CardActions>
        <Button
          variant='contained'
          type='submit'
          color='primary'
          onClick={() => handleLogin()}
          disabled={loading}
        >
          <CircularProgress size={18} thickness={2} />
          Login With Google
        </Button>
      </CardActions>
    </div>
  );
};

const CustomLogin = props => (
  <Login
    {...props}
    children={<CustomLoginForm {...props} />}
    backgroundImage='https://free-pptbackgrounds.com/wp-content/uploads/2019/08/background-blue-ppt-backgrounds-850x623.png'
  />
);

export default CustomLogin;
