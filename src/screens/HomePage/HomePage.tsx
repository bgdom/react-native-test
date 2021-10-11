import React, { useCallback } from 'react';
import SideMenu from 'react-native-side-menu';
import { View, Text } from "react-native";
import DrawerMenu from '../../components/DrawerMenu';

export default function homePage({ navigation, route }) {

  const { email, id, name } = route.params.user
  
  const disconnect = useCallback(() => {

  }, [])

  const menu = <DrawerMenu navigation={navigation} />

  return (
    <SideMenu menu={menu} isOpen={true} disablegesture={true}>
      <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Votre nom : {name}</Text>
        <Text>Votre email : {email}</Text>
        <Text>Votre id : {id}</Text>
        
      </View>
    </SideMenu>
  )
}