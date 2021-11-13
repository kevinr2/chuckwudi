import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoriesHome from '../components/categories/CategoriesHome'
import HeaderHome from '../components/header/HeaderHome'
import RestaurantHome from '../components/restaurants/RestaurantHome'
import TitleHome from '../components/title/TitleHome'




export default function Home() {
    const [recod, setRecod] = useState([])
    useEffect(() => {
        (async () => {
            await GetCategories();
        })()
    }, [])
    const GetCategories = async () => {
        const response = await fetch('https://kevinr2.github.io/Recursos/categories.json')
        const result = await response.json()
        setRecod({ result })
    }
    return (
        <SafeAreaView>
            <HeaderHome />
            <TitleHome />
            <CategoriesHome section={recod} />
            <RestaurantHome />
        </SafeAreaView>
    )
}
