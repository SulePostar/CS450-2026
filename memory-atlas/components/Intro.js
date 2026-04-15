import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About, Home, Login, Pricing } from "../screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function Intro() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1f1f1f', height: 120 },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: 'yellow',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '700', color: 'white' }
      }}>
      <Tab.Screen name="Home" component={Home} options={{ 
        tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="white" /> }} />
      <Tab.Screen name="About" component={About} options={{ 
        tabBarIcon: () => <MaterialCommunityIcons name="information" size={24} color="white" /> }} />
      <Tab.Screen name="Pricing" component={Pricing} options={{ 
        tabBarIcon: () => <MaterialCommunityIcons name="cash" size={24} color="white" /> }} />
      <Tab.Screen name="Login" component={Login} options={{ 
        tabBarIcon: () => <MaterialCommunityIcons name="login" size={24} color="white" /> }} />
    </Tab.Navigator>
  );
}