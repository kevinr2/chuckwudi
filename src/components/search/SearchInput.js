import React, { useRef, useState, useEffect } from 'react'
import { View, Text, TextInput, Pressable, Button, StyleSheet, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Products from './Products'

export default function SearchInput() {
    const [text, onChangeText] = useState("buscar")
    const [Product, setProduct] = useState([])
    useEffect(() => {
        (async () => {
            await GetProducts();
        })()
    }, [])
    const GetProducts = async () => {
        const response = await fetch('https://kevinr2.github.io/Recursos/products.json')
        const result = await response.json()
        setProduct({ result })
    }

    const title = Product.result
    const [Unit, setUnit] = useState(null)
    const Search = () => {
        const filtered = title.filter(function (element) {
            return element.name.toLowerCase().includes(text.toLowerCase());
        });
        setUnit(filtered)
    }
    return (
        <ScrollView>
            <View>
                <TextInput style={styleSearch.input} onChangeText={onChangeText} />
                <Button title="Search" onPress={() => Search()} />
                <View style={{ height: 400 }} >
                    {
                        Unit ? Unit.map(item =>
                            <Products key={item.id} url={item.image}
                                id={item.id}
                                title={item.name}
                                time={item.time}
                                price={item.price}
                                qualification={item.qualification}
                            />
                        ) : null
                    }
                </View>
            </View>
        </ScrollView>

    )

}
const styleSearch = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        shadowColor: '#fff',
        borderColor: 'rgba(123, 123, 123 ,0.2)',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 4,
        paddingStart: 20
    }

})