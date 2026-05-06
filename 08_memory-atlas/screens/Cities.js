import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CityItem from '../components/CityItem';
import citiesList from '../data/cities';
import colors from '../config/colors';

const Cities = ({ navigation }) => {
  const [cities, setCities] = useState(citiesList);
  const [currentCity, setCurrentCity] = useState(null);

  const selectCity = (id) => {
    setCurrentCity(id);
    const city = cities.find(c => c.id === id);
    navigation.navigate('CityDetails', { city });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={({ item }) =>
          <CityItem
            city={item}
            onSelect={selectCity}
            onRemove={(id) => setCities(cities.filter(c => c.id !== id))}
            currentCity={currentCity}
          />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Cities;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.dark0
  }
});