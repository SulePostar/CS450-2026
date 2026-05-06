import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: colors.text,
    textAlign: "center"
  },
  subtitle: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
    marginTop: 18
  },
  label: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    width: '100%',
    padding: 12,
    fontSize: 20
  },
  tabNavigator: {
    headerShown: false,
    tabBarStyle: { backgroundColor: '#1f1f1f', height: 120, paddingTop: 20 },
    tabBarLabelStyle: { fontSize: 14, fontWeight: '700', color: 'white' }
  }
});

export default styles;