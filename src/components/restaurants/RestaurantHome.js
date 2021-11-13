import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Product from './Product'

export default function RestaurantHome() {
    return (
        <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Product />
            <Product />
        </View>
    )
}

const style = StyleSheet.create({
    product: {
        width: 170,
        height: 110
    }
})