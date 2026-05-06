import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import styles from '../config/styles';

const Footer = () => {
  const items = useSelector(state => state.travel.list);
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const percentage = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>💼 You have {numItems} items on your list,</Text>
      <Text style={styles.footerText}>and you already packed {numPacked} ({percentage}%) of them.</Text>
    </View>
  );
}

export default Footer;