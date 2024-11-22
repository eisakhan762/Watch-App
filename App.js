import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Screen1 from "./Views/Screen1";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1 />
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    width: "100%",
    height: 50,
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
