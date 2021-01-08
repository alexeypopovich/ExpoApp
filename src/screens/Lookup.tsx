import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenView } from "../components/";
import { Colors } from "../styling";
import { Button, Header, Text, Input } from "../components";

const lookupStyles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.darkblue },
    headerContainer: { marginHorizontal: 30, justifyContent: 'center', alignItems: 'center' },
    txt: { color: Colors.white, marginVertical: 15, textAlign: 'center', fontSize: 12 },
    input: { width: '100%', marginBottom: 15 },
})

export const Lookup = () => {
    const [address, setAddress] = useState('');
    const onChange = (value: string) => setAddress(value);

    return (<ScreenView statusBarColor={Colors.black} navigationMenuColor={Colors.darkblue} barStyle="light-content">
        <Header title="Coinhouse Etherscan" />
        <View style={lookupStyles.container}>
            <View style={lookupStyles.headerContainer}>
                <Text style={lookupStyles.txt}>Please enter a valid ethereum address:</Text>
                <View style={lookupStyles.input}>
                  <Input onChangeText={onChange} value={address} />
                </View>
                <Button onPress={() => console.log('pressed')} title="Lookup" disabled={address.length === 0} />
            </View>
        </View>
    </ScreenView>)
};
