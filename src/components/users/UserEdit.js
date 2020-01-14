import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import UserNameField from './UserNameField';

const UserTitle = ({ record }) => {
  return (
    <span>{record ? <UserNameField record={record} size='32' /> : null}</span>
  );
};

const UserEdit = (props: any) => {
  return (
    <Edit title={<UserTitle />} {...props}>
      <SimpleForm>
        <TextInput source='id' fullWidth />
        <TextInput source='first_name' fullWidth />
        <TextInput source='last_name' fullWidth />
        <TextInput source='email' fullWidth />
        <TextInput source='avatar' fullWidth />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
