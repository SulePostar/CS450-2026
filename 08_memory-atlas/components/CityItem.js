import { Pressable, StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';
import colors from '../config/colors';

const CityItem = ({ city, onSelect, onRemove, currentCity }) => {

  const isSelected = currentCity === city.id;

  const removeCity = () => onRemove(city.id);
  const selectCity = () => onSelect(city.id);

  return (
    <Pressable style={[styles.container, isSelected && styles.selected]} onPress={selectCity}>
      <Image source={city.photo} style={styles.image} />
      <View style={styles.item}>
        <Text style={{ fontSize: 24, color: 'black' }}>{city.emoji}</Text>
        <Text style={{ fontSize: 24, color: colors.light3 }}>{city.cityName}</Text>
      </View>
      <Pressable onPress={removeCity}>
        <Text style={{ color: colors.light2 }}>❌</Text>
      </Pressable>
    </Pressable>
  );
}

export default CityItem;

const styles = StyleSheet.create({
  container: {
    width: 300,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: colors.dark2,
    borderRadius: 10,
    borderLeftColor: colors.brand1,
    borderLeftWidth: 10,
    padding: 10
  },
  selected: {
    borderColor: colors.brand1,
    borderWidth: 2
  },
  item: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 15
  },
  image: {
    width: 100,
    height: 70,
    resizeMode: 'cover'
  }
});