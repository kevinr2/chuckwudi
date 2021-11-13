import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ButtonAccount() {
    return (
        <View>
            <View style={{ width: 300, top: 100, left: 30, height: 200, }}>
                <Button styl title="edit" />
            </View>
            <View style={{ width: 300, bottom: 50, left: 30 }}>
                <Button title="logout" color="#f44336" />
            </View>
        </View>
    )
}
