import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const UserNameField = ({ record, size }) => {
  return record ? (
    <div className='username-field'>
      <Avatar src={record.avatar} />
      {record.first_name} {record.last_name}
    </div>
  ) : null;
};

UserNameField.defaultProps = { label: 'User', size: '25' };

UserNameField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  size: PropTypes.string
};

export default UserNameField;
