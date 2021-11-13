import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Delivery() {
    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <View style={{ width: '95%', backgroundColor: '#9c27b0', height: 180, borderRadius: 25, display: 'flex', justifyContent: 'space-evenly' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ color: 'white', right: 15 }}> 625 St Maria Ave </Text>
                    <Text style={{ color: 'yellow' }}> Edit </Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', right: 9, width: 25, height: 25, backgroundColor: 'rgba(115, 101, 152, 0.5)', borderRadius: 5, }}>
                            <Icon name="clock" style={{ color: 'yellow' }} size={12} />
                        </View>
                        <Text style={{ color: 'white' }}> 35 min</Text>
                    </View>
                    <Text style={{ color: 'yellow' }}>Chose time </Text>
                </View>
            </View>
        </View>
    )
}
