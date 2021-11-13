import React from 'react'
import { View, Text, Button } from 'react-native'
import ButtonAccount from './Buttons/ButtonAccount'

export default function AccountInfo() {
    return (
        <View style={{ top: 70, }}>
            <View style={{ top: 20 }}>
                <Text style={{ textAlign: 'center' }}>Name:</Text>
                <Text style={{ textAlign: 'center' }}>@Nick</Text>
            </View>
            <View style={{ top: 30 }}>
                <Text style={{ textAlign: 'center' }}>Correo:</Text>
                <Text style={{ textAlign: 'center' }}>nick@gmail.com</Text>
            </View>
            <View style={{ top: 40 }}>
                <Text style={{ textAlign: 'center' }}>Direccion:</Text>
                <Text style={{ textAlign: 'center' }}>N/A</Text>
            </View>
            <ButtonAccount />

        </View>
    )
}
