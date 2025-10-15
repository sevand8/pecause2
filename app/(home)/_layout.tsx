import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

const _layout = () => {
  return (
     <Tabs screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#25292e',
      },
    }}>
        <Tabs.Screen name="HomeScreen" options={{
            title:"Dashboard",
            tabBarIcon: ({color, size}) => (
                <Ionicons name="home" size={size} color={color}/>
            )
        }}/>
        <Tabs.Screen name="NowPlayingScreen" options={{
            title:"Now Playing", 
            tabBarIcon: ({color, size}) => (
              <Ionicons name="play-circle" size={size} color={color}/>
            )
        }}/>
        <Tabs.Screen name="SettingsScreen" options={{
            title:"Settings",
            tabBarIcon: ({color, size}) => (
                <Ionicons name="settings" size={size} color={color}/>
            )
        }}/>
    </Tabs>
  )
}

export default _layout