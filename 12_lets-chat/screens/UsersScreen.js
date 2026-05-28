import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import UserItem from '../components/UserItem';

const UsersScreen = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const usersRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersRef);
    const users = querySnapshot.docs.map(doc => doc.data());
    setUsers(users);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.userId}
      renderItem={({ item }) => <UserItem item={item} />}
    />
  )
}

export default UsersScreen;