import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const required = (message = 'Required') => value =>
  value ? undefined : message;

const UserCreate = (props: any) => {
  return (
    <Create {...props}>
      <SimpleForm redirect='list'>
        <TextInput
          autoFocus
          source='name'
          fullWidth
          validate={required('The name is required')}
        />
        <TextInput
          source='job'
          fullWidth
          validate={required('The job is required')}
        />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
