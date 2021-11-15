import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../components/search/SearchInput'

export default function Search() {
    return (
        <SafeAreaView>
            <View style={style.search}>
                <SearchInput />
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    search: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    }
})