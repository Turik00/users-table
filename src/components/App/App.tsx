import './App.css';
import UsersTable from '../UsersTable/UsersTable';
import UserDataForm from '../UserDataForm/UserDataForm';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // const addNewUserHandler = (newUser: User): boolean => {
  //   createUser(newUser);
  //   if (users.findIndex((user) => user.id === newUser.id) > -1) {
  //     toast.error('User ID already exists');
  //     return false;
  //   }
  //   setUsers((prevUsersState) => [...prevUsersState, newUser]);
  //   toast.success('User created successfuly');
  //   return true;
  // };

  // const deleteUserHandler = (deletedUser: User) => {
  //   setUsers(users.filter((user) => user.id !== deletedUser.id));
  //   toast('User deleted successfuly');
  // };

  return (
    <>
      <div className="main-container">
        <UserDataForm></UserDataForm>
        <UsersTable></UsersTable>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;
