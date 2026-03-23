import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    color: colors.text,
    fontWeight: "bold",
  },
  footer: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: colors.primary,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    borderColor: colors.text,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "80%",
    backgroundColor: colors.white,
    color: colors.text,
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderColor: colors.text,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    size: 24,
    color: colors.secondary
  },
  main: {
    flex: 8,
    width: "100%",
    padding: 10,
    backgroundColor: colors.back,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10
  },
  videoItem: {
    width: "100%",
    height: 180,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    // marginBottom: 10,
    borderColor: colors.text,
    borderWidth: 1
  },
  thumbnail: {
    width: "90%",
    height: "100%",
    borderRadius: 10,
  },
  videoTitle: {
    fontSize: 24,
    color: colors.text,
    fontWeight: "bold",
    marginBottom: 5,
  },
  videoDetails: {
    flexDirection: "row",
    width: "50%",
    gap: 15,
  },
  videoInfo: {
    flexDirection: "column",
    gap: 5,
  },
  videoStats: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  duration: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textStats: {
    fontSize: 16
  }
});

export default styles;