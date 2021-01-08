import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from './';
import { Colors } from "../styling";
import { Ionicons } from '@expo/vector-icons';

interface IProps {
    title: string;
    onBack?: () => void
}

const headerStyle = StyleSheet.create({
    container: { height: 60 ,backgroundColor: Colors.black, alignItems: 'center', justifyContent: 'center' },
    title: { color: Colors.white, fontSize: 18 },
    backBtn: { position: 'absolute', left: 10, flexDirection: 'row', alignItems: 'center' },
    backTxt: { color: Colors.lightBlue, fontSize: 16 },
})

export const Header = ({ title, onBack }: IProps) => {
    return (
        <View style={headerStyle.container}>
            {onBack && (
                <TouchableOpacity onPress={onBack} style={headerStyle.backBtn}>
                    <Ionicons name="chevron-back" size={24} color={Colors.lightBlue} />
                    <Text style={headerStyle.backTxt}>Back</Text>
                </TouchableOpacity>
            )}
            <Text style={headerStyle.title} bold>{title}</Text>
        </View>
        )
}
