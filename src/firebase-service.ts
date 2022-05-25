import { collection, deleteDoc, doc, onSnapshot, query, setDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import { User } from './interfaces';

export const usersQuery = query(collection(db, 'users'));

export const getAllUsers = (setUsers: React.Dispatch<React.SetStateAction<User[]>>) => {
  onSnapshot(usersQuery, (querySnapshot) => {
    setUsers(querySnapshot.docs.map((user) => user.data() as User));
  });
};

export const createUser = async (user: User): Promise<boolean> => {
  let isSucceded = true;
  // collection is a table in reqular DB
  // document is a row
  await setDoc(doc(db, 'users', `${user.id}`), {
    id: user.id,
    name: user.name,
    email: user.email,
  }).catch((err) => {
    console.log(err);
    isSucceded = false;
  });
  return isSucceded;
};

export const deleteUser = async (userId: number): Promise<boolean> => {
  let isSucceded = true;
  // collection is a table in reqular DB
  // document is a row
  await deleteDoc(doc(db, 'users', `${userId}`)).catch((err) => {
    console.log(err);
    isSucceded = false;
  });
  return isSucceded;
};
