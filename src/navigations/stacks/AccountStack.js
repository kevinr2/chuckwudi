import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Account from '../../screens/Account'

const Tab = createStackNavigator();

export default function AccountStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Account" component={Account} options={{
                title: "Account"
            }} />
        </Tab.Navigator>
    )
}
