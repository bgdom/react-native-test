import React, { useCallback, useState, useEffect } from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';
import { TextInput, View, Button, Text, StyleSheet } from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/user/userSlice';
import { UserData } from '../../models/useSliceData';
import { selectUserState } from '../../store/user/selector';

export default function CreateAccountPage({ navigation }) {
  const user: UserData = useSelector(selectUserState).data
  
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  
  const onRegister = useCallback(
     () => {
      if (!email.length || !name.length)
        return;
      
      dispatch(actions.registerUser({email, name}))
    },
    [email, name, dispatch],
  )

  // go to HomePage if user connected
  useEffect(() => {
    if (user) {
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [
          { name: 'HomePage' }
        ],
      }));
    }
  }, [user, navigation])

  return (
      <View style={{ flexDirection: 'column', flex: 1 }}>
        <Text style={styles.text} >Renseignez ces informations :</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email}/>
        <TextInput style={styles.input} onChangeText={setName} value={name}/>
        <Button style={{alignContent: 'center'}}title="Create my account" onPress={onRegister} />
      </View>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
  text: {
    color: 'black',
  },
});