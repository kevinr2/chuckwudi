import React from 'react'
import { View, Text, Pressable } from 'react-native'
import InfoCard from './InfoCard'

import { useSelector } from 'react-redux'
import { getCartItem, getTotal } from '../../redux/feature/CartSlice'


export default function Cart() {
    const CartInfo = useSelector(getCartItem)
    const Total = useSelector(getTotal)

    return (
        <View style={{ display: 'flex', alignItems: 'center', top: 20, }}>
            {
                CartInfo.map(item => <InfoCard key={item.id} cartItem={item} />)
            }

            <View style={{ top: 30, width: '89%', height: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text >Total:</Text>
                <Text style={{ fontSize: 20 }}>$ {(Total).toFixed(2)}</Text>
            </View>
            <View style={{ width: '100%', height: 120, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', top: 45 }}>
                <View style={{ width: 100, height: 50 }}>
                    <Text>Person</Text>
                    <Text style={{ top: 3, textAlign: 'center', fontSize: 20 }}> -  1 +</Text>
                </View>
                <Pressable style={{ width: 100, height: 50, backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Checkout</Text>
                </Pressable>
            </View>
        </View >
    )
}
