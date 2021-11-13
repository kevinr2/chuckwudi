import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default function InfoCard(props) {
    const { perfo } = props
    return (
        <View style={{ width: '98%', height: 100, top: perfo, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around' }}>
            <View>
                <Image style={{ width: 100, height: 70, borderRadius: 15, }} source={require('../../assets/images/salmon-dish-food-meal-46239.jpeg')} />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', }}>
                <Text>1</Text>
                <Text> x </Text>
                <Text>Hola mundo este</Text>
            </View>
            <View style={{}}>
                <Text> $4.5</Text>
            </View>
        </View>

    )
}
