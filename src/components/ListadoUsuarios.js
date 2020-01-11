import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { borrarUsuarioAction } from '../actions/usuariosActions';

const ListadoCitas = () => {
  const dispatch = useDispatch();
  const borrarUsuario = id => dispatch(borrarUsuarioAction(id));

  // Obtener las citas del state
  const usuarios = useSelector(state => state.usuarios);

  const mensaje =
    Object.keys(usuarios.usuarios).length === 0
      ? 'No Hay Usuarios'
      : 'Listado Usuarios';

  return (
    <div className='card mt-5'>
      <div className='card-body'>
        <h2 className='card-title text-center'>{mensaje}</h2>

        <div className='lista-citas'>
          {usuarios.usuarios.map(usuario => (
            <div key={usuario.id} className='media mt-3'>
              <div className='media-body'>
                <h3 className='mt-0'>{usuario.mascota}</h3>
                <p className='card-text'>
                  <span>Nombre Dueño: </span> {usuario.propietario}
                </p>
                <p className='card-text'>
                  <span>Fecha:</span> {usuario.fecha}
                </p>
                <p className='card-text'>
                  <span>Hora:</span> {usuario.hora}{' '}
                </p>
                <p className='card-text'>
                  <span>Sintomas: </span> <br />
                  {usuario.sintomas}
                </p>
                <button
                  className='btn btn-danger'
                  onClick={() => borrarUsuario(usuario.id)}
                >
                  Borrar &times;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListadoCitas;
