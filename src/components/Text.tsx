import React, { ReactNode } from 'react';
import { Text as TextRN } from 'react-native';

interface IProps {
    bold?: boolean;
    onPress?: () => void;
    children?: ReactNode;
    style?: object;
}

export const Text = (props: IProps) => {
    const { children, bold, style, onPress } = props;
    const fontWeight = { fontWeight: bold ? '600' : '400' };
    return (
        <TextRN {...props} style={[style, fontWeight]} onPress={onPress}>
            {children}
        </TextRN>
    );
};
