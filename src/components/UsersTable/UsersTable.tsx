import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { deleteUser, getAllUsers } from '../../firebase-service';
import { User } from '../../interfaces';

const UsersTable = (props: any) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers(setUsers);
    return () => {

    };
  }, [])

  const deleteUserHandler = async (userId: number) =>{
    if (await deleteUser(userId)) {
      toast.info('User deleted successfuly');
    }
  } 
  
  return users.length > 0 ? (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: User) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button size="sm" variant="danger" onClick={() => deleteUserHandler(user.id)}>
                  X
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  ) : (
    <></>
  );
};

export default UsersTable;
