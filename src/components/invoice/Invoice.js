import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Invoice(props) {

    const navigate = useNavigation()
    const { total } = props
    return (
        <View style={Style.Invoice}>
            <Text style={Style.pay}>to pay : <Text style={Style.total}>{total}</Text></Text>
            <Text style={Style.text}>payment method: cash</Text>
            <Text style={Style.text}> adress : 625 St Maria Ave</Text>
            <View>
                <Button onPress={() => navigate.goBack()} title="Send to Prepare" />
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    Invoice: {
        width: '100%',
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    pay: {
        textAlign: 'center',
        fontSize: 30
    },
    total: {
        textAlign: 'center',
        fontSize: 20
    },
    text: {
        fontSize: 20
    }
})
