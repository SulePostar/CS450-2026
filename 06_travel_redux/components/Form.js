import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/travelSlice';
import { View, Text, TextInput, Keyboard } from 'react-native';
import styles from '../config/styles';
import Button from './Button';

const Form = () => {
  const [quantity, setQuantity] = useState("1");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const items = useSelector(state => state.travel.list);

  const onAdd = () => {
    if (!description) return;
    const id = items.length === 0 ? 1 : Math.max(...items.map(i => i.id)) + 1;
    const newItem = {
      id,
      description,
      quantity: parseInt(quantity),
      packed: false
    };
    dispatch(addItem(newItem));
    setQuantity("1");
    setDescription("");
    Keyboard.dismiss();
  }

  return (
    <View style={styles.form}>
      <Text style={styles.label}>What do you need for your trip?</Text>
      <View style={styles.formBody}>
        <TextInput
          style={styles.number}
          onChangeText={text => setQuantity(text)}
          value={quantity.toString()}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setDescription(text)}
          value={description}
        />
        <Button onPress={onAdd}>ADD</Button>
      </View>
    </View>
  )
}

export default Form;