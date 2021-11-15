import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { credit } from '../../../Fb'
import ButtonAccount from './Buttons/ButtonAccount'

export default function AccountInfo() {


    const Email = credit.auth().currentUser.email

    return (
        <View style={{ top: 70, }}>
            <View style={{ top: 20 }}>
                <Text style={StyleInfo.texts}>Name:</Text>
                <Text style={StyleInfo.texts}>@Nick</Text>
            </View>
            <View style={{ top: 30 }}>
                <Text style={StyleInfo.texts}>Correo:</Text>
                <Text style={StyleInfo.texts}>{Email}</Text>
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
