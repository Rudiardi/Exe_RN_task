import { StatusBar } from 'react-native';
import React from 'react';
import { colors } from './src/styles';
import Login from './src/pages/Login';
import { 
  useFonts, 
  JosefinSans_400Regular,
  JosefinSans_700Bold
} from '@expo-google-fonts/josefin-sans'
import AppLoading from 'expo-app-loading';

export default function App(){
  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
    JosefinSans_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  };

  return(
    <>
      <StatusBar
        backgroundColor={colors.BACKGROUND}
        barStyle="light-content"/>
      <Login/>
    </>
  )
}
