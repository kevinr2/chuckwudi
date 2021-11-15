import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ButtonAccount from './Buttons/ButtonAccount'

export default function AccountInfo() {
    return (
        <View style={{ top: 70, }}>
            <View style={{ top: 20 }}>
                <Text style={StyleInfo.texts}>Name:</Text>
                <Text style={StyleInfo.texts}>@Nick</Text>
            </View>
            <View style={{ top: 30 }}>
                <Text style={StyleInfo.texts}>Correo:</Text>
                <Text style={StyleInfo.texts}>nick@gmail.com</Text>
            </View>
            <View style={{ top: 40 }}>
                <Text style={StyleInfo.texts}>Direccion:</Text>
                <Text style={StyleInfo.texts}>N/A</Text>
            </View>
            <ButtonAccount />
        </View>
    )
}
const StyleInfo = StyleSheet.create({
    texts: {
        textAlign: 'center'
    }
})
