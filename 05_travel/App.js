import { useState } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./config/styles";
import { Header, Footer, List, Form } from "./components";
import travel from "./travel.json";

export default function App() {
  const [items, setItems] = useState(travel);

  const addItem = (description, quantity) => {
    if (!description) return;
    setItems([...items, {
      id: Math.max(...items.map(i => i.id)) + 1,
      description,
      quantity,
      packed: false
    }]);
  }

  const togglePack = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Form onAdd={addItem} />
      <List
        items={items}
        clearList={() => setItems([])}
        togglePack={togglePack}
        removeItem={removeItem}
      />
      <Footer />
    </View>
  );
}