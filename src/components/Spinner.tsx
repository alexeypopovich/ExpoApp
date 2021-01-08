import React from 'react';
import { ActivityIndicator, Modal, View, StyleSheet } from 'react-native';
import { Colors } from '../styling';

interface IProps {
    visible: boolean;
    color?: string;
    size?: number | "large" | "small";
}

const spinnerStyle = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }
})

export const Spinner = ({ visible, color = Colors.white, size = "large" }: IProps) => (
    <Modal visible={visible} transparent>
        <View style={spinnerStyle.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    </Modal>
);

