import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStack from './stacks/HomeStack';
import SearchStack from './stacks/SearchStack';
import AccountStack from './stacks/AccountStack';
import CartShopStack from './stacks/CartShopStack';
import { PalleteColors } from '../assets/Colors'

import { useSelector } from 'react-redux';
import { getCartItem } from '../redux/feature/CartSlice';

const Tab = createBottomTabNavigator();
//colors
const { primary, purple, purpleDark, orage } = PalleteColors

export default function NavegationsTab() {
    const CartInfo = useSelector(getCartItem)
    const badge = Object.keys(CartInfo).length

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: primary
            }}
        >
            <Tab.Screen
                name="home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) =>
                        (<Icon name="home" color={color} size={size} />),
                }} />
            <Tab.Screen
                name="search"
                component={SearchStack}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) =>
                        (<Icon name="search" color={color} size={size} />),
                }} />
            <Tab.Screen
                name="account"
                component={AccountStack}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) =>
                        (<Icon name="user" color={color} size={size} />),
                }} />
            <Tab.Screen
                name="Cart"
                component={CartShopStack}
                options={{
                    tabBarIcon: ({ color, size }) =>
                        (<Icon name="shopping-cart" color={color} size={size} />),
                    tabBarBadge: badge
                }}

            />

        </Tab.Navigator>

    )
}

