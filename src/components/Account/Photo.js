import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



export default function Photo() {
    return (
        <View style={photo.imagesPhoto}>
            <View style={photo.colorsb}>
            </View>
        </View>

    )
}

const photo = StyleSheet.create({
    imagesPhoto: {
        height: 200,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center', top: 50
    },
    colorsb: {
        width: 120,
        height: 120,
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: 80
    }
})