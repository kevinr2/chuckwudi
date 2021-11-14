import React, { useEffect, useState } from 'react'
import { View, Text, Image, Button, Pressable, } from 'react-native'


export default function AddCart(props) {



    const { route } = props
    const { params } = route

    return (
        <View style={{ width: '100%', height: 200 }}>
            <Image source={{ uri: params.image }} style={{ width: '100%', height: '100%' }} />
            <Text style={{ fontSize: 15 }}>Description:</Text>
            <Text style={{ top: 10 }}>Lorem Ipsum is simply dummy text of theok a galley of type and scrambled it to make a type</Text>
            <Text style={{ top: 30, fontSize: 20, textAlign: 'center' }}>Price: {params.price}</Text>
            <Text style={{ top: 50, textAlign: 'center', fontSize: 20 }}> total:0 </Text>
            <View style={{ top: 110, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                <Pressable>
                    <Text style={{ fontSize: 20 }}>-</Text>
                </Pressable>
                <Text style={{ fontSize: 20 }}>0</Text>
                <Pressable>
                    <Text style={{ fontSize: 20 }}>+</Text>
                </Pressable>
            </View>
            <View style={{ top: 160 }}>
                <Button color="#F2C744" title='Add Cart' />
            </View>
        </View>
    )
}
