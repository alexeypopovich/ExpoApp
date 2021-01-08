import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Colors } from "../styling";

interface IProps {
  onChangeText?: (value: string) => void;
  value?: string;
}

const inputStyle = StyleSheet.create({
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

export const Input = (props: IProps) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      selectionColor="#FFE483"
      value={props.value}
      style={{
        minHeight: 50,
        ...inputStyle.input,
        color: Colors.white,
      }}
      onChangeText={props.onChangeText}
    />
  );
};
