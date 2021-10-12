import React from 'react';
import { View, Button, Text } from "react-native";

export default function Header({ isOpen, onLeftClick, ...other }) {
    
  return (
    <View style={[other.style, {flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1}]} {...other}>
      <Button style={{ flex: 1 }} title={isOpen ? "Fermer" : "ouvrir"} onPress={onLeftClick} />
      <View style={{flex: 9, justifyContent: 'center', alignItems: 'center'}}><Text>Home Page</Text></View>
    </View>
  )
}