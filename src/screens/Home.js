import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoriesHome from '../components/categories/CategoriesHome'
import HeaderHome from '../components/header/HeaderHome'
import TitleHome from '../components/title/TitleHome'


export default function Home() {
    return (
        <SafeAreaView>
            <HeaderHome />
            <TitleHome />
            <CategoriesHome />
        </SafeAreaView>
    )
}
