import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import colors from '../config/colors';

const Home = () => {
  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
      <LinearGradient style={[styles.container, { paddingTop: 80, paddingHorizontal: 20 }]}
        colors={['rgba(36, 42, 46, 0.95)', 'rgba(36, 42, 46, 0.75)']}>
        <Text style={styles.h1}>You travel the world.</Text>
        <Text style={styles.h2}>Memory Atlas keeps</Text>
        <Text style={styles.h2}>track of your adventures.</Text>
        <Text style={styles.h3}>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </Text>
      </LinearGradient>
    </ImageBackground>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  h1: {
    color: colors.light3,
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 20,
  },
  h2: {
    color: colors.light3,
    fontSize: 22
  },
  h3: {
    color: colors.light3,
    fontSize: 16,
    marginTop: 20
  }
});