import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Screens } from '@config'
import { colors, typography } from '@theme'
import { CallsScreens, SettingsScreen } from '@screens'
import { ChatNavigator } from '@navigation'

const Tab = createBottomTabNavigator()

const getIconColor = (focused: boolean) => (focused
  ? colors.accent
  : colors.secondary
)

export const defaultHeaderTitleStyle = {
  fontSize: typography.fontSize.lg,
  fontFamily: typography.fontFamily.bold,
  color: colors.primary,
}

export const MainNavigator: FC = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerTitleStyle: defaultHeaderTitleStyle,
    }}
  >
    <Tab.Screen
      name={Screens.ChatNavigator}
      component={ChatNavigator}
      options={{
        headerShown: false,
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
