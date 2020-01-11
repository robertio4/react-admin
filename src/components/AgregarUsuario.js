import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregarUsuarioAction } from '../actions/usuariosActions';
import { validarFormularioAction } from '../actions/validarActions';

const AgregarUsuario = () => {
  const [nombre, guardarNombre] = useState('');
  const [trabajo, guardarTrabajo] = useState('');

  const dispatch = useDispatch();
  const agregarNuevoUsuario = usuario =>
    dispatch(agregarUsuarioAction(usuario));
  const validarFormulario = estado => dispatch(validarFormularioAction(estado));

  // Obtener las citas del state
  const error = useSelector(state => state.error);

  const nuevoUsuario = e => {
    e.preventDefault();

    //Validar
    if (nombre.trim() === '' || trabajo.trim() === '') {
      validarFormulario(true);
      return;
    }

    validarFormulario(false);

    //Crear
    agregarNuevoUsuario({
      nombre,
      trabajo
    });

    //Reiniciar
    guardarNombre('');
    guardarTrabajo('');
  };

  return (
    <div className='card mt-5'>
      <div className='card-body'>
        <h2 className='card-title text-center mb-5'>Nuevo usuario</h2>
        <form onSubmit={nuevoUsuario}>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                type='text'
                className='form-control'
                placeholder='Nombre'
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}
              />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-4 col-lg-2 col-form-label'>Trabajo</label>
            <div className='col-sm-8 col-lg-10'>
              <input
                type='text'
                className='form-control'
                placeholder='Trabajo'
                value={trabajo}
                onChange={e => guardarTrabajo(e.target.value)}
              />
            </div>
          </div>
          <div className='form-group row justify-content-end'>
            <div className='col-sm-3'>
              <button type='submit' className='btn btn-success w-100'>
                Agregar
              </button>
            </div>
          </div>
        </form>

        {error.error ? (
          <div className='alert alert-danger text-center p2'>
            Todos los campos son obligatorios
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AgregarUsuario;
