import React, { useEffect, useState } from 'react'
import { View, Text, Image, Button, Pressable, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addItemCart } from '../redux/feature/CartSlice'

export default function AddCart(props) {
    const { route } = props
    const { params } = route

    const dispatch = useDispatch()

    const [amount, setAmount] = useState(0)
    const [totals, setTotals] = useState(0.00)

    const remove = () => {
        if (amount > 0) {
            setAmount(amount - 1)
        }
        Totalremove()
    }
    const Totalsum = () => {
        if (amount === 0) {
            setTotals(params.price)
        } else if (amount > 0) {
            setTotals(totals + params.price)
        }
    }
    const Totalremove = () => {
        if (amount > 0) {
            setTotals(totals - params.price)
        }
    }
    const sum = () => {
        setAmount(amount + 1)
        Totalsum()
    }

    return (
        <View style={{ width: '100%', height: 200 }}>
            <Image source={{ uri: params.image }} style={{ width: '100%', height: '100%' }} />
            <Text style={{ fontSize: 15 }}>Description:</Text>
            <Text style={{ top: 10 }}>Lorem Ipsum is simply dummy text of theok a galley of type and scrambled it to make a type</Text>
            <Text style={{ top: 30, fontSize: 20, textAlign: 'center' }}>Price: {params.price}</Text>
            <Text style={{ top: 50, textAlign: 'center', fontSize: 20 }}> total: {(totals).toFixed(2)} </Text>
            <View style={{ top: 110, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                <Pressable style={{ width: 50, height: 50, left: 30 }} onPress={() => remove()} >
                    <Text style={{ fontSize: 20, }}>-</Text>
                </Pressable>
                <Text style={{ fontSize: 20 }}>{amount}</Text>
                <Pressable style={{ width: 50, height: 50 }} onPress={() => sum()} >
                    <Text style={{ fontSize: 20 }}>+</Text>
                </Pressable>
            </View>
            <View style={{ top: 160 }}>
                <Button color="#F2C744"
                    title='Add Cart'
                    onPress={() => {
                        dispatch(addItemCart({
                            id: params.id,
                            name: params.name,
                            image: params.image,
                            amount: amount,
                            total: totals
                        }))
                    }} />
            </View>
        </View>
    )
}
