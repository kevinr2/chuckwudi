import React from 'react'
import { View, Text, Image, Button } from 'react-native'
import AccountInfo from './AccountInfo'
import Photo from './Photo'

const BackImg = require('../../assets/images/fondo.jpeg')
export default function Background() {
    return (
        <View style={{ width: '100%', }}>
            <Image style={{ width: '100%', height: 200, opacity: 0.8, position: 'absolute' }} source={BackImg} />
            <Photo />
            <AccountInfo />

        </View>
    )
}
