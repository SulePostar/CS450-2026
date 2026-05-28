import { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { AuthenticationContext } from '../context/AuthenticationContext';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useRoute } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { db, auth } from '../firebase/config';
import Avatar from '../components/Avatar';

const UserDetails = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const route = useRoute();
  const { userId } = route.params;

  const fetchUserDetails = async () => {
    const userRef = collection(db, 'users');
    const q = query(userRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();
      setUserDetails(userData);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <View style={styles.container}>
      {!!userDetails && (
        <>
          <Text style={styles.title}>Profile {userDetails.nickname}!</Text>
          <Avatar photo={userDetails.avatar} size={200} />
          <Text style={styles.message}>Role: {userDetails.role}</Text>
          <Button title="Back to Users" onPress={() => navigation.navigate('UsersList')} />
        </>
      )}
    </View>
  )
}

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  },
  message: {
    marginVertical: 6,
    fontSize: 20
  }
});