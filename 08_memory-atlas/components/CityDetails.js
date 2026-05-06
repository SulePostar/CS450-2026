import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import colors from '../config/colors';
import dayjs from 'dayjs';
import { getMapPreview } from '../services/location';

const CityDetails = ({ navigation, route }) => {
  const { city } = route.params;
  const [mapImage, setMapImage] = useState(null);

  useEffect(() => {
    getMapPreview(city.position.lat, city.position.lng).then(imageUrl => setMapImage(imageUrl));
  }, [city.position.lat, city.position.lng]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city.emoji} {city.cityName}</Text>
      <Text style={styles.text}>{city.country}</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Text style={styles.text}>Visited {dayjs(city.date).format('DD.MMM.YYYY')}</Text>
      <Text style={styles.text}>{city.notes}</Text>
      <Image source={city.photo} style={styles.image} />
      {mapImage && <Image source={{ uri: mapImage }} style={styles.image} />}
    </View>
  )
}

export default CityDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark0
  },
  title: {
    fontSize: 36,
    color: colors.light3,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    color: colors.light2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 280,
    height: 180,
    borderColor: colors.brand1,
    borderWidth: 4,
    borderRadius: 10,
    marginBottom: 20
  }
});


// position: {
//   lat: 40.46635901755316,
//   lng: -3.7133789062500004
// },

