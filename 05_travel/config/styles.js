import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: colors.back,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 50
  },
  header: {
    flex: 1,
    backgroundColor: colors.yellow,
    width: "100%",
    paddingTop: 20
  },
  form: {
    flex: 1.5,
    alignItems: "center",
    backgroundColor: colors.red,
    width: "100%",
    paddingTop: 10
  },
  formBody: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  footer: {
    flex: 2,
    backgroundColor: colors.green,
    width: "100%",
    paddingTop: 30
  },
  headerText: {
    fontSize: 36,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center"
  },
  footerText: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center"
  },
  label: {
    fontSize: 20,
    color: colors.text,
    textAlign: "center",
    marginBottom: 10
  },
  number: {
    height: 40,
    fontSize: 16,
    width: "15%",
    borderColor: colors.text,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white
  },
  input: {
    height: 40,
    fontSize: 16,
    width: "50%",
    borderColor: colors.text,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.white
  },
  button: {
    width: "20%",
    backgroundColor: colors.green,
    padding: 7,
    marginTop: -10,
    borderRadius: 20
  },
  buttonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  item: {
    margin: 5,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  itemText: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    marginBottom: 10
  },
  listContainer: {
    flex: 5,
    backgroundColor: colors.brown,
    width: "100%",
    paddingVertical: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  list: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default styles;