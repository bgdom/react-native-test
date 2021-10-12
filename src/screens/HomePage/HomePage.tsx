import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import Drawer from 'react-native-drawer';
import { StackActions } from '@react-navigation/native';

import { View, Text, StyleSheet} from "react-native";
import DrawerMenu from '../../components/DrawerMenu';
import { UserData } from '../../models/useSliceData';
import { useSelector } from 'react-redux';
import { selectUserState } from '../../store/user/selector';
import Header from '../../components/HomePageHeader';

export default function homePage({ navigation }) {
  const user: UserData = useSelector(selectUserState).data

  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const changeDrawerPosition = useCallback(() => {
    setDrawerOpen(!isDrawerOpen)
  }, [isDrawerOpen])

  useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: props => <Header isOpen={isDrawerOpen} onLeftClick={changeDrawerPosition} {...props} />});
  }, [navigation, changeDrawerPosition])

  useEffect(() => {
    if(!user)
      navigation.dispatch(StackActions.replace('LandingPage'))
  }, [user, navigation]);

  if (!user)
    return null;
  
  const { name, email, id } = user
  
  return (
    <Drawer open={isDrawerOpen} openDrawerOffset={0.3} content={<DrawerMenu navigation={navigation} />}>
      <View style={{flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>Votre nom : {name}</Text>
        <Text style={styles.text}>Votre email : {email}</Text>
        <Text style={styles.text}>Votre id : {id}</Text>
      </View>
    </Drawer>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});