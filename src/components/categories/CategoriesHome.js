import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import IconsCategories from './IconsCategories'

export default function CategoriesHome(props) {
    const { section } = props
    const { result } = section

    return (
        <View style={style.list} >
            <FlatList
                horizontal
                data={result}
                legacyImplementation={false}
                keyExtractor={(result) => String(result.id)}
                renderItem={({ item }) => <IconsCategories url={item.icon} title={item.name} />}
            />
        </View >
    )
}
const style = StyleSheet.create({
    list: {
        top: 35,
        left: 5
    }
})
