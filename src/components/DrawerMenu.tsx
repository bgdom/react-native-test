import React, { useCallback } from 'react';
import { StyleSheet, View, Button, Text, AsyncStorage } from "react-native";
import { StackActions } from '@react-navigation/native';

export default function DrawerMenu({ navigation }) {

  const logout = useCallback(() => {
    AsyncStorage.removeItem('user').then(() => {
      navigation.dispatch(StackActions.replace('LandingPage'))
    })
  }, [navigation])
    

  return (
    <View style={{backgroundColor: 'green', flex: 1}}>
      <Button title="Logout" onPress={logout}/>
    </View>
  )
}