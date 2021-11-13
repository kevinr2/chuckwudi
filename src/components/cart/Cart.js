import React from 'react'
import { View, Text, Pressable } from 'react-native'
import InfoCard from './InfoCard'


export default function Cart() {
    return (
        <View style={{ display: 'flex', alignItems: 'center', top: 20, }}>
            <InfoCard perfo={0} />
            <InfoCard perfo={20} />
            <View style={{ top: 30, width: '89%', height: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text >Total:</Text>
                <Text style={{ fontSize: 20 }}>$25.5</Text>
            </View>

            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', top: 45 }}>

                <View style={{ width: 100, height: 50 }}>
                    <Text>Person</Text>
                    <Text style={{ top: 3, textAlign: 'center', fontSize: 20 }}> -  1 +</Text>
                </View>
                <Pressable style={{ width: 100, height: 50, backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Checkout</Text>
                </Pressable>
            </View>
        </View >
    )
}
