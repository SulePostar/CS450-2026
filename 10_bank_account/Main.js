import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./config/styles";
import { Footer, Header, Customer, AccountOperations, BalanceDisplay } from "./components";

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <BalanceDisplay />
      <Customer />
      <AccountOperations />
      <Footer />
    </View>
  );
}