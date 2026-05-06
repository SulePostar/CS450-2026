import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cities, Countries, AddCity } from "../screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../config/styles";

const Tab = createBottomTabNavigator();

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={styles.tabNavigator}>
      <Tab.Screen name="Cities" component={Cities} options={{ 
        tabBarIcon: () => <MaterialCommunityIcons name="home-city" size={24} color="white" /> }} />
      <Tab.Screen name="Countries" component={Countries} options={{ 
        tabBarIcon: () => <MaterialCommunityIcons name="flag" size={24} color="white" /> }} />
      <Tab.Screen name="Add City" component={AddCity} options={{ 
        tabBarIcon: () => <MaterialCommunityIcons name="bookmark-plus" size={24} color="white" /> }} />
    </Tab.Navigator>
  );
}