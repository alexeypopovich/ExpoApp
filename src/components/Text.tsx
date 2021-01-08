import React, { ReactNode } from "react";
import { Text as TextRN, ViewStyle, TextStyle } from "react-native";

interface IProps {
  bold?: boolean;
  onPress?: () => void;
  children?: ReactNode;
  style?: TextStyle | ViewStyle | object;
}

export const Text = (props: IProps) => {
  const { children, bold, style, onPress } = props;
  const fontWeight = { fontWeight: bold ? "700" : "400" };
  return (
    <TextRN {...props} style={[{ color: "white" }, style, fontWeight]} onPress={onPress}>
      {children}
    </TextRN>
  );
};
