import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegationsTab from './src/navigations/NavegationsTab';

import { Provider } from 'react-redux'
import store from './src/redux/store';

import { credit } from './Fb';
import AuthStack from './src/navigations/stacks/AuthStack';

export default function App() {

  const [auth, setAuth] = useState(null)
  useEffect(() => {
    credit.auth().onAuthStateChanged((user) => {
      console.log(user)
      setAuth(user)
    })
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer>
        {auth ? <NavegationsTab /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
}

