import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Cart from './Cart'
import Delivery from './Delivery'

export default function ListCard() {
    return (
        <View >

            <ScrollView>
                <Delivery />
                <Cart />
            </ScrollView>
        </View>
    )
}
