import { View, Text } from 'react-native';
import styles from '../config/styles';

const AccountOperations = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Account Operations</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Loan Operations</Text>
      </View>
    </>
  )
}

export default AccountOperations;
