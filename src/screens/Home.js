import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoriesHome from '../components/categories/CategoriesHome'
import HeaderHome from '../components/header/HeaderHome'
import RestaurantHome from '../components/restaurants/RestaurantHome'
import TitleHome from '../components/title/TitleHome'


export default function Home() {




    return (
        <SafeAreaView>
            <HeaderHome />
            <TitleHome />
            <CategoriesHome />
            <RestaurantHome />
        </SafeAreaView>
    )
}
