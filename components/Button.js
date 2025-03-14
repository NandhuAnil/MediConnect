import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

const Button = (props) => {
    const filledBgColor = props.color || Colors.primary;
    const outlinedColor = Colors.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? Colors.white : Colors.primary;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontWeight: 900, fontSize: 18, ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 10,
        paddingVertical: 10,
        borderColor: Colors.primary,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button