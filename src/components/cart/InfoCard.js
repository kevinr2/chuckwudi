import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'



export default function InfoCard(props) {
    const { cartItem } = props
    return (
        <View style={{ width: '98%', height: 100, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <Image style={{ width: 100, height: 70, borderRadius: 15, }} source={{ uri: cartItem.image }} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', }}>
                <Text style={{ textAlignVertical: 'center' }}>{cartItem.amount}</Text>
                <Text style={{ textAlignVertical: 'center' }}> x </Text>
                <Text style={{ width: 100 }}>{cartItem.name}</Text>
            </View>
            <View style={{}}>
                <Text>{cartItem.total}</Text>
            </View>
            <Pressable>
                <Icon name="trash-alt" style={{ color: 'black' }} size={15} />
            </Pressable>

        </View>

    )
}
