import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'



export default function IconsCategories(props) {
    const { url, title } = props;
    return (
        <View style={styleIcons.icons}>
            <View style={styleIcons.line}></View>
            <Image source={{ uri: url }} style={styleIcons.imgs} />
            <Text style={styleIcons.name}>{title}</Text>
        </View>
    )
}


const styleIcons = StyleSheet.create({
    icons: {
        width: 60,
        height: 110,
        backgroundColor: 'rgba(242, 199, 68,0.0)',
        borderRadius: 34,
        marginRight: 4
    },
    line: {
        width: 50,
        height: 50,
        backgroundColor: 'background:rgba(255,255,255,0.1);',
        top: 10,
        left: 5,
        borderRadius: 30
    },
    imgs: {
        width: 40,
        height: 40,
        left: 10,
        position: 'absolute',
        top: 15,
        borderRadius: 20
    },
    name: {
        textAlign: 'center',
        top: 20
    }
})