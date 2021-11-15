import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { credit } from '../../Fb'

export default function Register() {
    const navigation = useNavigation()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()

    const register = () => {
        if (Email != undefined && Password != undefined) {
            alert("Successful registration")
            navigation.goBack()
            credit.auth().createUserWithEmailAndPassword(Email, Password).then((user) => {
            })
        }
    }
    return (
        <View style={styleLogin.inputs} >
            <TextInput style={styleLogin.borders1} onChangeText={setEmail} placeholder="Email" />
            <TextInput style={styleLogin.borders1} secureTextEntry={true} onChangeText={setPassword} placeholder="password" />
            <View style={styleLogin.buttonl} >
                <Button color="green" title="Sing up" onPress={() => register()} />
            </View>
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

})

