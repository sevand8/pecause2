import { Stack } from 'expo-router'
import React from 'react'
import { View,Text } from 'react-native'
import { Link } from "expo-router";

  export default function NowPlayingScreen(){
  return (
    <>
    <Stack.Screen options={{title:"Now Playing"}}/>
    <View>
    <Link href="/(home)/HomeScreen">Regresa al Inicio</Link>
    </View>
    </>
  )
}