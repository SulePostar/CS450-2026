import { View, FlatList } from 'react-native';
import styles from '../config/styles';
import Button from './Button';
import Item from './Item';

const List = ({ items, clearList, togglePack, removeItem }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        numColumns={2}
        data={items}
        renderItem={({ item }) => <Item key={item.id} data={item} togglePack={togglePack} removeItem={removeItem} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <Button width="50%" onPress={clearList}>Clear List</Button>
    </View>
  )
}

export default List;