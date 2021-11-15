import React, { useRef } from 'react'
import { View, Text, Pressable, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


export default function Delivery() {


    return (
        <View style={{ alignItems: 'center' }}>
            <View style={delivery.text}>
                <View style={delivery.adress}>
                    <Text style={{ color: 'white' }}>625 st maria Ave</Text>
                    <Pressable >
                        <Text style={delivery.text1}> Edit </Text>
                    </Pressable>

                </View>
                <View style={delivery.square}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={delivery.icon}>
                            <Icon name="clock" style={delivery.text1} size={12} />
                        </View>
                        <Text style={{ color: 'white' }}> 35 min</Text>
                    </View>
                    <Text style={delivery.text1}>Chose time </Text>
                </View>
            </View>
        </View>
    )
}
const delivery = StyleSheet.create({
    text: {
        width: '95%',
        backgroundColor: '#9c27b0',
        height: 180,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    square: {
        display: 'flex'
        , flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: 9,
        width: 25,
        height: 25,
        backgroundColor: 'rgba(115, 101, 152, 0.5)',
        borderRadius: 5,
    },
    adress: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text1: {
        color: '#F2C744'
    }
})
