import React, { useCallback, useEffect, useState } from 'react';

import { StackActions } from '@react-navigation/native';
import { View, Button, SafeAreaView, AsyncStorage, ActivityIndicator } from "react-native";

export default function LandingPage({ navigation }) {
  const [isInit, setIsInit] = useState(false)
  
  const onRegister = useCallback(
    () => navigation.navigate('CreateAccountPage'),
    [navigation],
  )

  useEffect(() => {
    if (isInit)
      return;
    
    AsyncStorage.getItem('user').then(user => {
      if (user)
        navigation.dispatch(
          StackActions.replace('HomePage', {
            user: JSON.parse(user)
          }))
      else
        setIsInit(true)
    })
    
    
  }, [isInit]);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!isInit ? <ActivityIndicator /> : (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        
          <Button title="Register with my email" onPress={onRegister}/>
        </View>
      )}
      
    </SafeAreaView>
    
  )
}