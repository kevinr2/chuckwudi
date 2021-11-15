import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'
import AccountInfo from './AccountInfo'
import Photo from './Photo'

const BackImg = require('../../assets/images/fondo.jpeg')
export default function Background() {
    return (
        <View style={{ width: '100%', }}>
            <Image style={styleB.imageBack} source={BackImg} />
            <Photo />
            <AccountInfo />
        </View>
    )
}

const styleB = StyleSheet.create({
    imageBack: {
        width: '100%',
        height: 200,
        opacity: 0.8,
        position: 'absolute'
    }
})