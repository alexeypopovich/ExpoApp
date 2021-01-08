import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from './';
import {Colors} from "../styling";

interface IProps {
    onPress: () => void;
    title: string;
    style?: object;
    disabled?: boolean
}

const btnStyles = StyleSheet.create({
    container: { height: 50, backgroundColor: Colors.lightBlue, justifyContent: 'center', alignItems: 'center', minWidth: 180, borderRadius: 6 },
    title: { color: Colors.white },
    disabled: { backgroundColor: Colors.btnDisabled }
})

export const Button = ({ onPress, title, style, disabled = false }: IProps) => {
    const titleColor = { color: disabled ? Colors.inactiveGray : Colors.white };
    return (
        <TouchableOpacity style={[btnStyles.container, disabled && btnStyles.disabled]} disabled={disabled}>
            <Text style={[btnStyles.title, titleColor]} bold>{title}</Text>
        </TouchableOpacity>
    );
}
