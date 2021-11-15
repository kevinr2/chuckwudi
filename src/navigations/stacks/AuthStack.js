import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Register from '../../screens-auth/Register';
import Login from '../../screens-auth/Login'

const Tab = createStackNavigator();

export default function AuthStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="login" component={Login} />
            <Tab.Screen name="resgister" component={Register} />
        </Tab.Navigator>
    )
}



