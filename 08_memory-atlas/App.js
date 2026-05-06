import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View,  Button} from "react-native";
import styles from "./config/styles";
import { Home, About, Pricing, Login } from "./screens";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Intro from "./components/Intro";
import Main from "./components/Main";
import Header from "./components/Header";
import Cities from "./screens/Cities";
import CityDetails from "./components/CityDetails";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Header />
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Cities" component={Cities} />
        <Stack.Screen name="CityDetails" component={CityDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}