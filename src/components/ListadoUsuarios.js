import React, { useState } from 'react';
import keyBy from 'lodash/keyBy';
import { useMediaQuery } from '@material-ui/core';

import {
  useQueryWithStore,
  Datagrid,
  TextField,
  Pagination,
  Loading,
  List,
  SimpleList
} from 'react-admin';

const elemetsPage = 5;

const PostPagination = props => (
  <Pagination perPage={elemetsPage} rowsPerPageOptions={[5, 10]} {...props} />
);

const CustomList = props => {
  const { resource } = props;
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const [page, setPage] = useState(1);
  const perPage = elemetsPage;
  const { data, total, loading, error } = useQueryWithStore({
    type: 'getList',
    resource: resource,
    payload: {
      pagination: { page, perPage },
      sort: { field: 'id', order: 'ASC' },
      filter: {}
    }
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>ERROR: {error}</p>;
  }

  return (
    <List {...props} data={data} pagination={<PostPagination />}>
      {isSmall ? (
        <SimpleList
          primaryText={record => `${record.first_name} ${record.last_name}`}
          secondaryText={record => record.email}
          tertiaryText={record => record.id}
          linkType='show'
        />
      ) : (
        <Datagrid rowClick='edit'>
          <TextField source='id' sortable={false} />
          <TextField source='email' sortable={false} />
          <TextField source='first_name' sortable={false} />
          <TextField source='last_name' sortable={false} />
        </Datagrid>
      )}
    </List>
  );
};

export default CustomList;
