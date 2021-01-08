import { StyleSheet } from "react-native";
import { Colors } from "../index";

export const inputStyle = StyleSheet.create({
  input: {
    padding: 0,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 14,
    width: "100%",
    fontSize: 16,
    lineHeight: 22,
    backgroundColor: Colors.inputBG,
  },
});
