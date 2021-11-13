import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import IconsCategories from './IconsCategories'

export default function CategoriesHome() {

    return (
        <View style={{ top: 35, left: 5 }} >
            <ScrollView
                horizontal={true}
            >
                <IconsCategories url='https://kevinr2.github.io/Recursos/icons/701965.png' title="All" />
                <IconsCategories url='https://kevinr2.github.io/Recursos/icons/135367.png' title="trop" />
                <IconsCategories url='https://kevinr2.github.io/Recursos/icons/1900683.png' title="asia" />
                <IconsCategories url='https://kevinr2.github.io/Recursos/icons/883806.png' title=" burger" />
                <IconsCategories url='https://kevinr2.github.io/Recursos/icons/933310.png' title="burcue" />
                <IconsCategories url='https://kevinr2.github.io/Recursos/icons/174394.png' title="postre" />
            </ScrollView>
        </View >
    )
}
