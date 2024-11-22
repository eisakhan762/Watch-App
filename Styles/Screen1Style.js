import { StyleSheet } from "react-native";

export const Screen1Style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  hour: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
    height: 60,
    marginBottom: 5,
    fontWeight: "bold",
  },
  minute: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
    height: 60,
    marginBottom: 5,
    fontWeight: "bold",
  },
  second: {
    color: "white",
    fontSize: 50,
    lineHeight: 50,
    height: 60,
    marginBottom: 5,
    fontWeight: "bold",
  },
  timeNotation: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
