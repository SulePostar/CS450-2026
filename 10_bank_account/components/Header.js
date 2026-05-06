import { View, Text } from 'react-native';
import styles from '../config/styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
    </View>
  )
}

export default Header;