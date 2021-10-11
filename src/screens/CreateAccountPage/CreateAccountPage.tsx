import React, { useCallback, useState } from 'react';
import { StackActions } from '@react-navigation/native';
import { TextInput, View, SafeAreaView, Button, Text, StyleSheet, AsyncStorage } from "react-native";

import { saveUser } from '../../service/api'

export default function CreateAccountPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const onRegister = useCallback(
    async () => {
      if (!email.length || !name.length)
        return;
      
      const user = {
        name, email
      }
      console.log(user);
      
      try {
        const result = await saveUser(user)

        await AsyncStorage.setItem('user', JSON.stringify(result))
        navigation.dispatch(
          StackActions.replace('HomePage', {
            result
          }))
      } catch (error) {
        console.log(error)

      }
    },
    [email, name, navigation],
  )
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text>Renseignez ces informations :</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email}/>
        <TextInput style={styles.input} onChangeText={setName} value={name}/>
        <Button style={{alignContent: 'center'}}title="Create my account" onPress={onRegister} />
      </View>
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});