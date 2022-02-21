import React, { FC } from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { MainNavigator, AuthNavigator } from '@navigation'

import { colors } from '@theme'
import { useAuthContext } from '@hooks'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
}

export const AppNavigator: FC = () => {
  const { user } = useAuthContext()

  const Navigator = user ? MainNavigator : AuthNavigator

  return (
    <NavigationContainer theme={MyTheme}>
      <Navigator />
    </NavigationContainer>
  )
}
