import { StyleSheet } from "react-native";
import { Colors } from "../index";

export const qrscanStyles = StyleSheet.create({
  container: { flex: 1 },
  address: { marginVertical: 10, textAlign: "center" },
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-evenly",
    backgroundColor: Colors.inputBG,
  },
});
