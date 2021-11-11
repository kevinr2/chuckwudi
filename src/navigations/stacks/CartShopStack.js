import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartShop from '../../screens/CartShop'

const Tab = createStackNavigator();

export default function CartShopStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="cartShop" component={CartShop} options={{
                title: "Cart"
            }} />
        </Tab.Navigator>
    )
}
