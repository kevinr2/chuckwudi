import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../../screens/Search'
import AddCart from '../../screens/AddCart';

const Tab = createStackNavigator();

export default function SearchStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="search" component={Search} options={{
                title: "Search"
            }} />
            <Tab.Screen name="addCart" component={AddCart} options={{
                title: "Details"
            }} />
        </Tab.Navigator>
    )
}
