import { View, Text, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

const Pricing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Simple pricing</Text>
      <Text style={styles.h2}>Just $9/month.</Text>
      <Text style={styles.p}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
        labore mollitia iusto. Recusandae quos provident, laboriosam fugit
        voluptatem iste.
      </Text>
      <Image source={require('../assets/img2.jpg')} style={styles.image} />
    </View>
  )
}

export default Pricing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.dark0,
    paddingHorizontal: 20
  },
  h1: {
    fontSize: 27,
    fontWeight: '700',
    color: colors.light3
  },
  h2: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.light3,
    marginVertical: 20
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