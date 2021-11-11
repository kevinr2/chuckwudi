import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../../screens/Search'

const Tab = createStackNavigator();

export default function SearchStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="search" component={Search} options={{
                title: "Search"
            }} />
        </Tab.Navigator>
    )
}
