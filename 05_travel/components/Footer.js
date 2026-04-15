import { View, Text } from 'react-native';
import styles from '../config/styles';

const Footer = ({ numItems, numPacked }) => {
  const percentage = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>💼 You have {numItems} items on your list,</Text>
      <Text style={styles.footerText}>and you already packed {numPacked} ({percentage}%) of them.</Text>
    </View>
  );
}

export default Footer;