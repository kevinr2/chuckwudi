import React, { useEffect, useState } from 'react'
import { View, Text, Image, Button, Pressable, StyleSheet, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addItemCart } from '../redux/feature/CartSlice'

export default function AddCart(props) {
    const { route } = props
    const { params } = route

    const dispatch = useDispatch()
    const navegation = useNavigation()

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

    const add = () => {
        dispatch(addItemCart({
            id: params.id,
            name: params.name,
            image: params.image,
            amount: amount,
            total: totals
        }))
        navegation.navigate("home")
    }

    return (
        <View style={styleCart.view}>
            <Image source={{ uri: params.image }} style={styleCart.imgCart} />
            <Text style={styleCart.text}>Description:</Text>
            <Text style={{ top: 10 }}>Lorem Ipsum is simply dummy text of theok a galley of type and scrambled it to make a type</Text>
            <Text style={styleCart.price}>Price: {params.price}</Text>
            <Text style={styleCart.total}> total: {(totals).toFixed(2)} </Text>
            <View style={styleCart.amount}>
                <Pressable style={styleCart.subtration} onPress={() => remove()} >
                    <Text style={styleCart.text}>-</Text>
                </Pressable>
                <Text style={styleCart.text}>{amount}</Text>
                <Pressable style={styleCart.sum} onPress={() => sum()} >
                    <Text style={styleCart.text}>+</Text>
                </Pressable>
            </View>
            <View style={{ top: 160 }}>
                <Button color="#F2C744"
                    title='Add Cart'
                    onPress={() => add()} />
            </View>
        </View>
    )
}

const styleCart = StyleSheet.create({
    view: {
        width: '100%',
        height: 200
    },
    imgCart: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 20
    },
    price: {
        top: 30,
        fontSize: 20,
        textAlign: 'center'
    },
    total: {
        top: 50,
        textAlign: 'center',
        fontSize: 20
    },
    amount: {
        top: 110,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    subtration: {
        width: 50,
        height: 50,
        left: 30
    },
    sum: {
        width: 50,
        height: 50
    }
})