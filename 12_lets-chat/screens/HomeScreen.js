import { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { AuthenticationContext } from '../context/AuthenticationContext';
import { auth } from '../firebase/config';

const HomeScreen = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.message}>Welcome, {user?.email}</Text>
      <Button title="Logout" onPress={() => auth.signOut()} />
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