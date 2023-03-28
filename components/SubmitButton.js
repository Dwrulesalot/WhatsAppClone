import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const SubmitButton = props => {

    const enabledBgColor = props.color || colors.primary;
    const disabledBGColor = colors.lightGrey
    const bgColor = props.disabled ? disabledBGColor : enabledBgColor;

    return <TouchableOpacity style={{ ...styles.button, ...{backgroundColor: bgColor }}}>
        <Text sytle={{color: props.disabled ? colors.grey : 'white '}}>
            Click Me
            </Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },  
});

export default SubmitButton;