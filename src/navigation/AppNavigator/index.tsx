import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainNavigator, AuthNavigator } from '@navigation'
import { useAuthContext } from '@hooks'

export const AppNavigator: FC = () => {
  const { user } = useAuthContext()

  const Navigator = user ? MainNavigator : AuthNavigator

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}
