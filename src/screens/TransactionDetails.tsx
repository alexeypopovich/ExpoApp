import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Header, ScreenView, Text } from "../components";
import { Colors } from "../styling";
import { StackNavigationProp } from "@react-navigation/stack";
import { MainStackParamList } from "../navigation";
import { RouteProp } from "@react-navigation/native";
import { detailStyles } from "../styling/screens/TransactionDetails";

export const TransactionDetails = ({ route, navigation }: { route: RouteProp<MainStackParamList, "TransactionDetails">; navigation: StackNavigationProp<MainStackParamList> }) => {
  const { params } = route;
  const { transaction } = params;
  const goBack = () => navigation.goBack();
  return (
    <ScreenView statusBarColor={Colors.black} navigationMenuColor={Colors.darkblue} barStyle="light-content">
      <Header title="Transaction Details" onBack={goBack} />
      <ScrollView>
        {Object.keys(transaction).map((key, index) => (
          <View style={[detailStyles.itemContainer, { marginTop: index === 0 ? 0 : 2 }]} key={key + transaction[key]}>
            <Text bold style={detailStyles.text}>
              {key}
            </Text>
            <Text style={detailStyles.text}>{transaction[key]}</Text>
          </View>
        ))}
      </ScrollView>
    </ScreenView>
  );
};
