import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Intro")}>
        <Text style={styles.text}>🌎 Memory Atlas 🌎</Text>
      </Pressable>
    </View>
  )
}

export default Header;

const styles = {
  container: {
    backgroundColor: 'black',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  },
  text: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
  },
};