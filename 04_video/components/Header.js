import { View, Text } from 'react-native';
import styles from "../config/styles";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>══ Video Browser ══</Text>
    </View>
  );
}

export default Header;