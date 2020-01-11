const initialState = {
  usuarios: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'AGREGAR_USUARIO':
      return {
        ...state,
        usuarios: [...state.usuario, action.payload]
      };
    case 'BORRAR_USUARIO':
      return {
        ...state,
        usuarios: state.usuarios.filter(
          usuario => usuario.id !== action.payload
        )
      };
    default:
      return state;
  }
}
