import React from 'react'
import { View, Text, StyleSheet, Button, Pressable, } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default function Login() {
    return (
        <View style={styleLogin.inputs} >
            <TextInput style={styleLogin.borders1} placeholder="Email" />
            <TextInput style={styleLogin.borders1} placeholder="Password" />
            <View style={styleLogin.buttonl} >
                <Button title="Login" />
            </View>
            <Pressable style={styleLogin.sing}>
                <Text style={styleLogin.singText}>sing in</Text>
            </Pressable>
        </View>
    )
}

const styleLogin = StyleSheet.create({
    inputs: {
        width: '100%',
        height: 580,
        top: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    borders1: {
        width: 250,
        padding: 8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'gray',
    },
    buttonl: {
        marginTop: 30,
        width: 200
    },
    sing: {
        top: 30,
        width: 200,
    },
    singText: {
        color: 'blue',
        textAlign: 'center'
    }
})
