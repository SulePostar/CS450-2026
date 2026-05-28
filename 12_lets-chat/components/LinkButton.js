import { Pressable, Text, StyleSheet } from 'react-native';

const LinkButton = ({ onPress, labels }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {labels.map((label, index) => (
        <Text key={index} style={styles.buttonText}>{label}</Text>
      ))}
    </Pressable>
  );
}

export default LinkButton;

const styles = StyleSheet.create({
  buttonText: {
    color: '#eaf9e7'
  },
  button: {
    height: 48,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 14,
    borderColor: '#eaf9e7',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});