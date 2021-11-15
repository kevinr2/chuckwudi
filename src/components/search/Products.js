import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { SvgXml } from 'react-native-svg'
import logoes from './Start'


export default function Product(props) {
    const { title, url, time, qualification, price, id } = props
    const prod = props
    const navigation = useNavigation()
    const goToDetails = () => {
        navigation.navigate("addCart", {
            id: id,
            name: title,
            image: url,
            qualification: qualification,
            price: price,
            time: time
        })
    }
    return (
        <TouchableWithoutFeedback onPress={() => { goToDetails() }}>
            <View style={styleProduct.products}>
                <View style={styleProduct.time}>
                    <Text style={styleProduct.textTime}>{time}</Text>
                </View>
                <Image source={{ uri: url }} style={styleProduct.image} />
                <Text style={{ left: 4 }}>{title}</Text>
                <View style={styleProduct.div}>
                    <SvgXml xml={logoes} style={styleProduct.start} fill='black' />
                    <Text style={{ marginLeft: 8 }}>{qualification}</Text>
                    <Text style={{ marginLeft: 15 }}>$ {price}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styleProduct = StyleSheet.create({
    products: {
        width: 160,
        height: 160,
        top: 50,
        left: 8,
        marginLeft: 8
    },
    time: {
        width: 70,
        height: 30,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 100,
        top: 80,
        borderRadius: 10
    },
    image: {
        width: 160,
        height: 110,
        borderRadius: 25
    },
    start: {
        width: 10,
        height: 10,
        top: 5,
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        left: 4
    },
    textTime: {
        top: 8,
        left: 4
    }
})
