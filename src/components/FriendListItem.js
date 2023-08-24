import React from 'react';
import PropTypes from 'prop-types';
import '../css/FriendList.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {

  const statusText = isOnline ? 'Online' : 'Offline';

  return (
    <li className="item">
      <span className={`status ${isOnline ? 'online' : 'offline'}`}>
        <span className="hidden">{isOnline ? 'Online' : 'Offline'}</span>
      </span>
      <img className="avatar" src={avatar} alt={`Avatar of ${name}`} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
