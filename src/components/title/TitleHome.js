import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SvgXml } from 'react-native-svg'
import logo from './svg/1046784'

export default function TitleHome() {
    return (
        <View >
            <Text style={style.title}>Restaurant</Text>
            <SvgXml style={style.logo} xml={logo} width={18} height={18} />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 21,
        top: 40,
        left: 5
    },
    logo: {
        left: 110,
        top: 18
    }

})