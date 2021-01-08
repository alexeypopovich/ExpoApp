import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenView } from "../components/ScreenView";
import {Colors} from "../styling";
import {Button, Header, Text} from "../components";

const lookupStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.darkblue },
    headerContainer: { marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' },
    txt: { color: Colors.white, marginVertical: 15, textAlign: 'center', fontSize: 12 }
})

export const Lookup = () => {
    return (<ScreenView statusBarColor={Colors.black} navigationMenuColor={Colors.darkblue} barStyle="light-content">
        <Header title="Coinhouse Ethersan" />
        <View style={lookupStyles.container}>
            <View style={lookupStyles.headerContainer}>
                <Text style={lookupStyles.txt}>Please enter a valid ethereum address:</Text>
                <Button onPress={() => console.log('pressed')} title="Lookup" disabled />
            </View>

        </View>
    </ScreenView>)
};
