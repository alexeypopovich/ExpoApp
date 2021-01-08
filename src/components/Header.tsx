import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "./Text";
import { Colors } from "../styling";
import { Ionicons } from "@expo/vector-icons";
import { headerStyle } from "../styling/components/Header";

interface IProps {
  title: string;
  onBack?: () => void;
}

export const Header = ({ title, onBack }: IProps) => {
  return (
    <View style={headerStyle.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack} style={headerStyle.backBtn}>
          <Ionicons name="chevron-back" size={24} color={Colors.lightBlue} />
          <Text style={headerStyle.backTxt}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={headerStyle.title} bold>
        {title}
      </Text>
    </View>
  );
};
