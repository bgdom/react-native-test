/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './src/screens/LandingPage/LandingPage';
import CreateAccountPage from './src/screens/CreateAccountPage/CreateAccountPage';
import HomePage from './src/screens/HomePage/HomePage';
import { persistor, store } from './src/store/configureStore';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage">
              <Stack.Screen name="LandingPage" component={LandingPage} />
              <Stack.Screen name="CreateAccountPage" component={CreateAccountPage} />
              <Stack.Screen name="HomePage" component={HomePage} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>

    </Provider>
  );
};

export default App;
