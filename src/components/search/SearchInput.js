import React from 'react'
import { View, Text, TextInput, Pressable, Button } from 'react-native'

export default function SearchInput() {
    return (
        <View  >
            <TextInput style={{ width: 300, height: 40, shadowColor: '#fff', borderColor: 'rgba(123, 123, 123 ,0.2)', borderWidth: 2, borderRadius: 15, marginBottom: 4, paddingStart: 20 }} placeholder="Buscando..." />
            <Button title="Search" />
        </View>
    )
}
