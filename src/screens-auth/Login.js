import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Pressable, } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { credit } from '../../Fb'


export default function Login() {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const login = () => {
        if (Email != undefined && Password != undefined) {
            credit.auth().signInWithEmailAndPassword(Email, Password).then((userfb) => {
            })
        }
    }
    return (
        <View style={styleLogin.inputs} >
            <TextInput style={styleLogin.borders1} onChangeText={setEmail} placeholder="Email" />
            <TextInput style={styleLogin.borders1} secureTextEntry={true} onChangeText={setPassword} placeholder="Password" />
            <View style={styleLogin.buttonl} >
                <Button title="Sing in" onPress={() => login()} />
            </View>
            <Pressable style={styleLogin.sing} onPress={() => navigation.navigate("resgister")}>
                <Text style={styleLogin.singText}>Sing up</Text>
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
