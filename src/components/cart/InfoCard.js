import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useDispatch } from 'react-redux'
import { removeItemCart } from '../../redux/feature/CartSlice'



export default function InfoCard(props) {
    const { cartItem } = props
    const dispatch = useDispatch();
    return (
        <View style={cards.info}>
            <View>
                <Image style={cards.img} source={{ uri: cartItem.image }} />
            </View>
            <View style={cards.textName}>
                <Text style={cards.set}>{cartItem.amount}</Text>
                <Text style={cards.set}> x </Text>
                <Text style={{ width: 100 }}>{cartItem.name}</Text>
            </View>
            <View >
                <Text>{(cartItem.totalPrice).toFixed(2)}</Text>
            </View>
            <Pressable onPress={() => dispatch(removeItemCart({ invoice: cartItem.invoice }))}>
                <Icon name="trash-alt" color='black' size={15} />
            </Pressable>
        </View>
    )
}

const cards = StyleSheet.create({
    info: {
        width: '98%'
        , height: 100,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textName: {
        display: 'flex',
        flexDirection: 'row',
    },
    textline: {
        textAlign: 'center'
    },
    set: {
        textAlignVertical: 'center'
    },
    img: {
        width: 100,
        height: 70,
        borderRadius: 15,
    }
})

