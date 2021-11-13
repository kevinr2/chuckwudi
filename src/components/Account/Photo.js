import React from 'react'
import { View, Text } from 'react-native'



export default function Photo() {
    return (
        <View style={{ height: 200, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', top: 50 }}>
            <View style={{ width: 120, height: 120, backgroundColor: 'black', position: 'absolute', borderRadius: 80 }}>
            </View>
        </View>

    )
}
