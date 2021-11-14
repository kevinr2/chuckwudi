import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { SvgXml } from 'react-native-svg'
import logoes from './Start'


const img2 = 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440'
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
            <View style={{ width: 160, height: 160, top: 50, left: 8, marginLeft: 8 }}>
                <View style={{ width: 70, height: 30, backgroundColor: 'white', position: 'absolute', zIndex: 100, top: 80, borderRadius: 10 }}>
                    <Text style={{ top: 8, left: 4 }}>{time}</Text>
                </View>
                <Image source={{ uri: url }} style={{ width: 160, height: 110, borderRadius: 25 }} />
                <Text style={{ left: 4 }}>{title}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', left: 4 }}>
                    <SvgXml xml={logoes} style={{ width: 10, height: 10, top: 5, }} fill='black' />
                    <Text style={{ marginLeft: 8 }}>{qualification}</Text>
                    <Text style={{ marginLeft: 15 }}>$ {price}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
