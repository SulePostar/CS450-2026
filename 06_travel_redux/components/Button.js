import { Text, TouchableOpacity } from 'react-native'
import styles from '../config/styles';

const Button = ({ children, onPress, width="20%" }) => {
  return (
    <TouchableOpacity style={[styles.button, { width }]} onPress={onPress}> 
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button;