import { View, Text, TouchableOpacity } from 'react-native'
import styles from '../config/styles';

const Item = ({ data, togglePack, removeItem }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => togglePack(data.id)}>
        <Text style={styles.itemText}>
          {data.packed ? "✅" : "⬜"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>
        {data.quantity > 1 && `${data.quantity} x `}
        {data.description}
      </Text>
      <TouchableOpacity onPress={() => removeItem(data.id)}>
        <Text style={styles.itemText}>
          ❌
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Item;

// ✅ ⬜ ❌