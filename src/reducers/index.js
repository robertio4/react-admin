import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import validacionReducer from './validacionReducer';

export default combineReducers({
  usuarios: usuariosReducer,
  error: validacionReducer
});
