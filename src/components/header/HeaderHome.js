import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { PalleteColors } from '../../assets/Colors'

const { purple, primary, orange } = PalleteColors

const headerImg = require('../../assets/images/headerimage.png')
const imgSpan = require('../../assets/images/d.png')

export default function HeaderHome() {
    return (
        <View>
            <View style={style.header}>
                <View style={style.cardHeader}>
                    <View style={style.titleHeader} >
                        <Image style={style.spanImg} source={imgSpan} />
                        <Text style={style.textPrimary}>$0 delivery for 30 day!</Text>
                        <Text style={{ fontSize: 8 }}>$0 delivery free for orders over $10 for 30 days</Text>
                    </View>
                    <Image source={headerImg} style={style.imgHeader} />

                </View>

            </View>
        </View>

    )
}

const style = StyleSheet.create({
    header: {
        width: " 100%",
        height: 200,
    },
    cardHeader: {
        backgroundColor: 'rgba(242, 199, 68,0.1)',
        width: '98.5%',
        height: '100%',
        left: 2,
        right: 2,
        borderRadius: 20,
    },
    imgHeader: {
        width: 100,
        height: '95%',
        top: 7,
        left: 15
    },
    titleHeader: {
        position: 'absolute',
        left: 140,
        top: '30%',

    },
    textPrimary: {
        fontSize: 16,
        color: orange
    },
    spanImg: {
        width: 15,
        height: 15,
        left: 162,
        top: 18
    }

})