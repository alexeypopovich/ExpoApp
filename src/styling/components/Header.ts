import { StyleSheet } from "react-native";
import { Colors } from "../index";

export const headerStyle = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
  title: { color: Colors.white, fontSize: 18 },
  backBtn: {
    position: "absolute",
    left: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backTxt: { color: Colors.lightBlue, fontSize: 16 },
});
