import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegationsTab from './src/navigations/NavegationsTab';

import { Provider } from 'react-redux'
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavegationsTab />
      </NavigationContainer>
    </Provider>
  );
}

