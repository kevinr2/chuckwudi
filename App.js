import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegationsTab from './src/navigations/NavegationsTab';

export default function App() {
  return (
    <NavigationContainer>
      <NavegationsTab />
    </NavigationContainer>
  );
}

