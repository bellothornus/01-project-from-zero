import {useState } from 'react';

import UserForm from '../UsersForm/UserForm';
import UsersList from './UsersList';
import styles from './Users.module.css';

export default function Users(props) {
  const [usersList, setUsersList] = useState([]);

  function extendUsersList(newUser){
    setUsersList(prevState => [...prevState,newUser])
  }

  return(
    <div className={styles.users}>
      <UserForm onAddNewUser={extendUsersList}/>
      <br />
      <UsersList  users={usersList}/>
    </div>
  )
};