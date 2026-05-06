import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../config/styles';
import { togglePack, removeItem } from '../store/travelSlice';

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const toggle = () => dispatch(togglePack(data.id));
  const remove = () => dispatch(removeItem(data.id));

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={toggle}>
        <Text style={styles.itemText}>
          {data.packed ? "✅" : "⬜"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>
        {data.quantity > 1 && `${data.quantity} x `}
        {data.description}
      </Text>
      <TouchableOpacity onPress={remove}>
        <Text style={styles.itemText}>❌</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Item;