import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { credit } from '../../../../Fb'

export default function ButtonAccount() {
    const logout = () => {
        alert("log out")
        credit.auth().signOut()
    }
    return (
        <View>
            <View style={StyleAccount.buttons1}>
                <Button color='#F25922' title="edit" />
            </View>
            <View style={StyleAccount.buttons2}>
                <Button title="logout" color="#533CA6" onPress={() => logout()} />
            </View>
        </View>
    )
}

const StyleAccount = StyleSheet.create({
    buttons1: {
        width: 300,
        top: 80,
        left: 30,
        height: 200
    },
    buttons2: {
        width: 300,
        height: 150,
        bottom: 70,
        left: 30
    }
})
