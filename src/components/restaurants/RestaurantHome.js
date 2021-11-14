import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import Product from './Product'



export default function RestaurantHome(props) {
    const { products } = props
    const { result } = products

    return (
        <View style={{ height: 500 }} >
            <FlatList
                horizontal
                data={result}
                keyExtractor={(result) => String(result.id)}
                renderItem={({ item }) =>
                    <Product url={item.image}
                        id={item.id}
                        title={item.name}
                        time={item.time}
                        price={item.price}
                        qualification={item.qualification}
                    />}
            />

        </View>
    )
}

