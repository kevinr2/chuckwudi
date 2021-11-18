import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import Invoice from '../components/invoice/Invoice'

export default function Checkout(props) {
    const { route } = props
    const { params } = route
    console.log(props)
    return (

        <View>
            <Invoice total={params.total} />
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
    }
})
