import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Text } from "./Text";
import { Colors } from "../styling";

interface IProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  disabled?: boolean;
}

const btnStyles = StyleSheet.create({
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

export const Button = ({ onPress, title, disabled = false }: IProps) => {
  const titleColor = { color: disabled ? Colors.inactiveGray : Colors.white };
  return (
    <TouchableOpacity onPress={onPress} style={[btnStyles.container, disabled && btnStyles.disabled]} disabled={disabled}>
      <Text style={[btnStyles.title, titleColor]} bold>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
