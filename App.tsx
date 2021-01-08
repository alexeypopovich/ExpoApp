import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStack } from "./src/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
