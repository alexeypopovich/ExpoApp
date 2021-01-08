import React from "react";
import { ActivityIndicator, Modal, View } from "react-native";
import { Colors } from "../styling";
import { spinnerStyle } from "../styling/components/Spinner";

interface IProps {
  visible: boolean;
  color?: string;
  size?: number | "large" | "small";
}

export const Spinner = ({ visible, color = Colors.white, size = "large" }: IProps) => (
  <Modal visible={visible} transparent>
    <View style={spinnerStyle.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  </Modal>
);
