import { StyleSheet } from "react-native";
import { Colors } from "../index";


export const lookupStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.darkblue },
  headerContainer: {
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: Colors.white,
    marginVertical: 15,
    textAlign: "center",
    fontSize: 12,
  },
  input: { width: "100%", marginBottom: 15 },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.inputBG,
  },
  txtContainer: { marginLeft: 10 },
  receiver: { color: Colors.white, fontSize: 12 },
  value: { color: Colors.white },
  title: {
    textAlign: "center",
    color: Colors.white,
    backgroundColor: Colors.inputBG,
    paddingVertical: 15,
    marginTop: 20,
  },
});
