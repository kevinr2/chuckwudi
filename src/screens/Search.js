import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/search/SearchInput'

export default function Search() {
    return (
        <SafeAreaView>
            <View style={{ display: 'flex', alignItems: 'center', }}>
                <SearchInput />
            </View>
        </SafeAreaView>
    )
}
