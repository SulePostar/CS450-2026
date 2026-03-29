import { View, Text } from 'react-native';
import styles from '../config/styles';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>💼 You have 12 items on your list,</Text>
      <Text style={styles.footerText}>and you already packed 6 (50%) of them.</Text>
    </View>
  );
}

export default Footer;