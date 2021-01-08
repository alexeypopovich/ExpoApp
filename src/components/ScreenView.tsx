import React from "react";
import { StatusBar, StatusBarStyle, SafeAreaView as SafeAreaRN, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../styling";

interface IProps {
  statusBarColor?: string;
  navigationMenuColor?: string;
  children?: JSX.Element | JSX.Element[];
  barStyle?: StatusBarStyle;
}

export const ScreenView = ({ statusBarColor = Colors.white, navigationMenuColor = statusBarColor, children, barStyle }: IProps) => {
  const insets = useSafeAreaInsets();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: navigationMenuColor,
      paddingBottom: 0,
    },
    statusBar: {
      position: "absolute",
      top: 0,
      height: insets.top,
      left: 0,
      right: 0,
      backgroundColor: statusBarColor,
    },
  });
  return (
    <>
      <SafeAreaRN style={styles.container}>
        <View style={styles.statusBar} />
        <StatusBar barStyle={barStyle || "light-content"} backgroundColor={statusBarColor} />
        {children}
      </SafeAreaRN>
    </>
  );
};
