import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './';
import {Colors} from "../styling";

interface IProps {
    title: string;
}

const headerStyle = StyleSheet.create({
    container: { height: 60 ,backgroundColor: Colors.black, alignItems: 'center', justifyContent: 'center' },
    title: { color: Colors.white, fontSize: 18 },
})

export const Header = ({ title }: IProps) => {
    return (
        <View style={headerStyle.container}>
            <Text style={headerStyle.title} bold>{title}</Text>
        </View>
        )
}
