import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Info() {
    return (
        <SafeAreaView>
            <View style={{ left: 5 }}>
                <Text>Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the indust
                    standard dummy text ever since the 1500s,</Text>
            </View>
        </SafeAreaView>
    )
}
