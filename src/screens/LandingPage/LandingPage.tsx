import React, { useCallback, useEffect, useState } from 'react';

import { StackActions } from '@react-navigation/native';
import { Button, View, ActivityIndicator, Image } from "react-native";
import { useSelector } from 'react-redux';
import { UserData } from '../../models/useSliceData';
import { selectUserState } from '../../store/user/selector';

export default function LandingPage({ navigation }) {
  const user: UserData = useSelector(selectUserState).data

  const [isInit, setIsInit] = useState(false)
  
  const onRegister = useCallback(
    () => navigation.navigate('CreateAccountPage'),
    [navigation],
  )

  useEffect(() => {
    if (isInit)
      return;
    
    setTimeout(() => {
      if (user){
        navigation.dispatch(StackActions.replace('HomePage'))
      }
      else
        setIsInit(true)
    }, 1500)
    
  }, [isInit, user, navigation]);
  
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {!isInit ? <ActivityIndicator /> : (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{width: 300, height: 300, marginBottom: 30}} source={{ uri: 'https://x-squad.com/images/logo.png' }}/>
          <Button title="Register with my email" onPress={onRegister}/>
        </View>
      )}
    </View>
    
  )
}