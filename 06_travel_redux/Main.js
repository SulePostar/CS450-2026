import { useEffect } from "react";
import { View, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import styles from "./config/styles";
import { Header, Footer, List, Form } from "./components";
import { setList } from "./store/travelSlice";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Travel List</Text>
    </View>
  );
}