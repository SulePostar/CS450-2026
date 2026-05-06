import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>About Memory Atlas</Text>
      <Image source={require('../assets/img1.jpg')} style={styles.image} />
      <Text style={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
        dicta illum vero culpa cum quaerat architecto sapiente eius non
        soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
        perspiciatis?
      </Text>
      <Text style={styles.p}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        doloribus libero sunt expedita ratione iusto, magni, id sapiente
        sequi officiis et.
      </Text>
    </View>
  )
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.dark0,
    paddingHorizontal: 20
  },
  h1: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.light3
  },
  p: {
    fontSize: 16,
    color: colors.light3,
    marginTop: 10
  },
  image: {
    width: '100%',
    height: 200,
    marginVertical: 20,
    borderRadius: 10
  }
});