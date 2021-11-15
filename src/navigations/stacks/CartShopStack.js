import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartShop from '../../screens/CartShop'
import Checkout from '../../screens/Checkout';

const Tab = createStackNavigator();

export default function CartShopStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="cartShop" component={CartShop} options={{
                title: "My order"
            }} />
            <Tab.Screen name="checkout" component={Checkout} options={{
                title: "Invoice"
            }}
            />
        </Tab.Navigator>
    )
}
