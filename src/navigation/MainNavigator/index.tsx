import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Screens } from '@config'
import { colors, typography } from '@theme'
import {
  ChatsScreens,
  SearchScreen,
  CallsScreens,
  SettingsScreen,
} from '@screens'

const Tab = createBottomTabNavigator()

const getIconColor = (focused: boolean) => (focused
  ? colors.accent
  : colors.secondary
)

export const MainNavigator: FC = () => (
  <Tab.Navigator screenOptions={{
    tabBarShowLabel: false,
    headerTitleAlign: 'left',
    headerTitleStyle: {
      fontSize: typography.fontSize.lg,
      color: colors.primary,
    },
  }}
  >
    <Tab.Screen
      name={Screens.Chats}
      component={ChatsScreens}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name='chatbubble'
            color={getIconColor(focused)}
            size={24}
          />
        ),
        headerTitle: 'Recent chats',
      }}
    />
    <Tab.Screen
      name={Screens.Search}
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
      name={Screens.Calls}
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
      name={Screens.Settings}
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
)
