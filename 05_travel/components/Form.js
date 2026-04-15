import { useState } from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import styles from '../config/styles';
import Button from './Button';

const Form = ({ onAdd }) => {
  const [quantity, setQuantity] = useState("1");
  const [description, setDescription] = useState("");

  const addItem = () => {
    onAdd(description, parseInt(quantity));
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
        <Button onPress={addItem}>ADD</Button>
      </View>
    </View>
  )
}

export default Form;