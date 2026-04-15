import { useEffect, useState } from "react";
import { KeyboardAvoidingView, View, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import styles from "./config/styles";
import { Header, Footer, List, Form } from "./components";

export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await AsyncStorage.getItem("travel");
        if (result) setItems(JSON.parse(result));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("travel", JSON.stringify(items));
      } catch (error) {
        console.log("Error saving data:", error);
      }
    }
    saveData();
  }, [items]);

  const addItem = (description, quantity) => {
    if (!description) return;
    const newArr = [...items, {
      id: Math.max(...items.map(i => i.id)) + 1,
      description,
      quantity,
      packed: false
    }];
    setItems(newArr);
  }

  const togglePack = (id) => {
    const newArr = items.map(item => item.id === id ? { ...item, packed: !item.packed } : item);
    setItems(newArr);
  }

  const removeItem = (id) => {
    const newArr = items.filter(item => item.id !== id);
    setItems(newArr);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 70}
    >
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
        <Footer numItems={items.length} numPacked={items.filter(item => item.packed).length} />
      </View>
    </KeyboardAvoidingView>
  );
}