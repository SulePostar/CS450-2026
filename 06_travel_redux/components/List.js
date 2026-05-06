import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../config/styles';
import Button from './Button';
import Item from './Item';
import { clearList } from '../store/travelSlice';

const List = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.travel.list);
  console.log(items);

  const clear = () => dispatch(clearList());

  return (
    <View style={styles.listContainer}>
      <FlatList
        numColumns={2}
        data={items}
        renderItem={({ item }) => <Item key={item.id} data={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <Button width="50%" onPress={clear}>Clear List</Button>
    </View>
  )
}

export default List;