import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function ButtonAccount() {
    return (
        <View>
            <View style={StyleAccount.buttons1}>
                <Button color='#F25922' title="edit" />
            </View>
            <View style={StyleAccount.buttons2}>
                <Button title="logout" color="#533CA6" />
            </View>
        </View>
    )
}

const StyleAccount = StyleSheet.create({
    buttons1: {
        width: 300,
        top: 100,
        left: 30,
        height: 200
    },
    buttons2: {
        width: 300,
        bottom: 50,
        left: 30
    }
})
