import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { MainNavigator, AuthNavigator } from '@navigation'

export const AppNavigator = () => (
  <NavigationContainer>
    <AuthNavigator />
    {/* <MainNavigator /> */}
  </NavigationContainer>
)
