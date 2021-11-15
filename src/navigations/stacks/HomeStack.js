import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home'
import Info from '../../screens/Info';
import AddCart from '../../screens/AddCart';


const Tab = createStackNavigator();

export default function HomeStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} options={{
                title: "Chukwudi"
            }} />
            <Tab.Screen name="info" component={Info} />
            <Tab.Screen name="addCart" component={AddCart} options={{
                title: "Details"
            }} />
        </Tab.Navigator>
    )
}
