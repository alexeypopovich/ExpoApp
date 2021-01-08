import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Header, ScreenView, Text } from "../components";
import { Colors } from "../styling";

const detailStyles = StyleSheet.create({
    itemContainer: { paddingHorizontal: 15, backgroundColor: Colors.inputBG, paddingVertical: 10 },
    text: { fontSize: 12 }
})

export const TransactionDetails = ({ route, navigation }) => {
    const { params } = route;
    const { transaction } = params;
    const goBack = () => navigation.goBack();
    return (
        <ScreenView statusBarColor={Colors.black} navigationMenuColor={Colors.darkblue} barStyle="light-content">
            <Header title="Transaction Details" onBack={goBack}/>
            <ScrollView>
                {Object.keys(transaction).map((key, index) =>
                    (<View style={[detailStyles.itemContainer, { marginTop: index === 0 ? 0 : 2}]}>
                    <Text bold style={detailStyles.text}>
                        {key}
                    </Text>
                    <Text style={detailStyles.text}>
                        {transaction[key]}
                    </Text>
                </View>))}
            </ScrollView>
        </ScreenView>
    )
}
