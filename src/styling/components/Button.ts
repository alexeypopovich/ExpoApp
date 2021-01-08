import { StyleSheet } from "react-native";
import { Colors } from "../index";

export const btnStyles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Colors.lightBlue,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 180,
    borderRadius: 6,
  },
  title: { color: Colors.white, marginHorizontal: 30 },
  disabled: { backgroundColor: Colors.btnDisabled },
});
