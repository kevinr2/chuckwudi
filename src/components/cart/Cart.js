import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import InfoCard from './InfoCard'

import { useSelector } from 'react-redux'
import { getCartItem, getTotal } from '../../redux/feature/CartSlice'
import { useNavigation } from '@react-navigation/core'


export default function Cart() {
    const CartInfo = useSelector(getCartItem)
    const Total = useSelector(getTotal)
    const [person, setPerson] = useState(1)

    const navigation = useNavigation()
    const remove = () => {
        if (person > 1) {
            setPerson(person - 1)
        }
    }
    const sum = () => {
        setPerson(person + 1)
    }
    const checkoutLIst = () => {
        navigation.navigate("checkout", { total: Total })
    }

    return (
        <View style={card.father}>
            {
                CartInfo.map(item => <InfoCard key={item.invoice} cartItem={item} />)
            }
            <View style={card.total}>
                <Text >Total:</Text>
                <Text style={{ fontSize: 20 }}>$ {(Total).toFixed(2)}</Text>
            </View>
            <View style={card.person}>
                <View style={{ width: 140, height: 70 }}>
                    <Text>Person</Text>
                    <View style={card.personsum}>
                        <Pressable onPress={() => remove()}>
                            <Text style={card.textPerson}>-</Text>
                        </Pressable>
                        <Text style={card.textPerson}>{person}</Text>
                        <Pressable onPress={() => sum()}>
                            <Text style={card.textPerson}> +</Text>
                        </Pressable>
                    </View>
                </View>
                <Pressable onPress={() => checkoutLIst()} style={card.checkout}>
                    <Text>Checkout</Text>
                </Pressable>
            </View>
        </View >
    )
}

const card = StyleSheet.create({
    father: {
        display: 'flex',
        alignItems: 'center',
        top: 20,
    },
    total: {
        top: 30,
        width: '89%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    person: {
        width: '100%',
        height: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 45
    },
    checkout: {
        width: 100,
        height: 50,
        backgroundColor: '#F2C744',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    personsum: {
        top: 3,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textPerson: {
        fontSize: 30
    },
    max: {
        width: 90,
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
