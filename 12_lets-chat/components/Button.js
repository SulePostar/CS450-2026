import { Text, Pressable, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 14,
    marginBottom: 12,
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800'
  }
});