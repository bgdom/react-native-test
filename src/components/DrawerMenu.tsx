import React, { useCallback } from 'react';
import { View, Button } from "react-native";
import { useDispatch } from 'react-redux';
import { actions } from '../store/user/userSlice';

export default function DrawerMenu({ navigation }) {
  const dispatch = useDispatch()

  const logout = useCallback(() => {
    dispatch(actions.disconnectUser())
  }, [navigation])
    

  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <Button title="Logout" onPress={logout}/>
    </View>
  )
}