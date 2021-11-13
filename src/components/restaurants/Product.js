import React from 'react'
import { View, Text, Image } from 'react-native'
import { SvgXml } from 'react-native-svg'
import logoes from './Start'


const img2 = 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=226&w=440'
export default function Product() {
    return (
        <View style={{ width: 160, height: 160, top: 50, left: 8, marginLeft: 8 }}>
            <View style={{ width: 70, height: 30, backgroundColor: 'white', position: 'absolute', zIndex: 100, top: 80, borderRadius: 10 }}>
                <Text style={{ top: 8, left: 4 }}>25-30 min</Text>
            </View>
            <Image source={{ uri: img2 }} style={{ width: 160, height: 110, borderRadius: 25 }} />
            <Text style={{ left: 4 }}>Babel Story</Text>
            <View style={{ display: 'flex', flexDirection: 'row', left: 4 }}>
                <SvgXml xml={logoes} style={{ width: 10, height: 10, top: 5, }} fill='black' />
                <Text style={{ marginLeft: 8 }}>4.5</Text>
            </View>
        </View>
    )
}
