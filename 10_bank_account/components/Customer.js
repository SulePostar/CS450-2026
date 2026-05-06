import { View, Text } from 'react-native';
import styles from '../config/styles';

const Customer = () => {
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Customer</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Create Customer</Text>
    </View>
    </>
  )
}

export default Customer;