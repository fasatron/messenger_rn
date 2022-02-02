import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {
  ChatsScreens,
  SearchScreen,
  CallsScreens,
  SettingsScreen,
} from '@screens'
import { theme } from '@theme'

const Tab = createBottomTabNavigator()

const getIconColor = (focused: boolean) => (focused
  ? theme.color.accent
  : theme.color.secondary
)

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
    }}
    >
      <Tab.Screen
        name='Chats'
        component={ChatsScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='chatbubble'
              color={getIconColor(focused)}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='search'
              size={24}
              color={getIconColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Calls'
        component={CallsScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='call'
              size={24}
              color={getIconColor(focused)}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name='person-circle'
              size={24}
              color={getIconColor(focused)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)
