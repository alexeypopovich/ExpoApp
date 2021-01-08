import React from "react";
import { TextInput } from "react-native";
import { Colors } from "../styling";
import { inputStyle } from "../styling/components/Input";

interface IProps {
  onChangeText?: (value: string) => void;
  value?: string;
  placeholder?: string;
}

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
      placeholderTextColor="lightgray"
      onChangeText={props.onChangeText}
    />
  );
};
