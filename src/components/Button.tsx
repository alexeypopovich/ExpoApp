import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Text } from "./Text";
import { Colors } from "../styling";
import { btnStyles } from "../styling/components/Button";

interface IProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
  disabled?: boolean;
}

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
