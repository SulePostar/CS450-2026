import { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { AuthenticationContext } from '../context/AuthenticationContext';
import Avatar from '../components/Avatar';

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user?.nickname}</Text>
      <Avatar photo={user?.avatar} />
      <Text style={styles.message}>Email: {user?.email}</Text>
      <Text style={styles.message}>Role: {user?.role}</Text>
      <Button title="Users List" onPress={() => navigation.navigate('UsersList')} />
    </View>
  )
}

export default HomeScreen;

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
    marginVertical: 12,
    fontSize: 20
  }
});