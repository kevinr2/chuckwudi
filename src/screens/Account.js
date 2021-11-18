import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Background from '../components/Account/Background'

export default function Account() {
    return (
        <ScrollView>
            <View>
                <Background />
            </View>
        </ScrollView>
    )
}
