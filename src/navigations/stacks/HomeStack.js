import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home'

const Tab = createStackNavigator();

export default function HomeStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{
                title: "Chukwudi"
            }} />
        </Tab.Navigator>
    )
}
