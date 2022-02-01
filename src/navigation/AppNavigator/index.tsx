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

const Tab = createBottomTabNavigator()

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name='Chats'
        component={ChatsScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'chatbubble' : 'chatbubble-outline'}
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
              name={focused ? 'search' : 'search-outline'}
              size={24}
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
              name={focused ? 'call' : 'call-outline'}
              size={24}
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
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
)
