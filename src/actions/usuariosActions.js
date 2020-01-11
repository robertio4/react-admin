export const agregarUsuarioAction = usuario => {
  return {
    type: 'AGREGAR_USUARIO',
    payload: usuario
  };
};

export const borrarUsuarioAction = id => {
  return {
    type: 'BORRAR_USUARIO',
    payload: id
  };
};
