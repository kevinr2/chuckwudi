import React from 'react'
import { View, Text } from 'react-native'
import Cart from './Cart'
import Delivery from './Delivery'

export default function ListCard() {
    return (
        <View >
            <Delivery />
            <Cart />
        </View>
    )
}
