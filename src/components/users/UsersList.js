import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';

import {
  useQueryWithStore,
  Datagrid,
  EmailField,
  Loading,
  List,
  SimpleList
} from 'react-admin';
import UserNameField from './UserNameField';

const elemetsPage = 5;

const CustomList = props => {
  const [page, setPage] = useState(1);

  const { resource } = props;
  const perPage = elemetsPage;
  const { data, loading, error } = useQueryWithStore({
    type: 'getList',
    resource: resource,
    payload: {
      pagination: { page, perPage }
    }
  });

  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR: {error}</p>;
  }

  return (
    <List
      {...props}
      data={data}
      perPage={elemetsPage}
      title={'List Users'}
      bulkActionButtons={false}
      setPage={setPage}
    >
      {isSmall ? (
        <SimpleList
          leftAvatar={record => <img src={record.avatar} />}
          primaryText={record => `${record.first_name} ${record.last_name}`}
          secondaryText={record => record.email}
          linkType='edit'
        />
      ) : (
        <Datagrid rowClick='edit'>
          <UserNameField sortable={false} />
          <EmailField source='email' sortable={false} />
        </Datagrid>
      )}
    </List>
  );
};

export default CustomList;
