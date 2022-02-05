import React, { FC } from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Screens } from '@config'
import {
  SignInScreen,
  SignUpScreen,
  ConfirmEmailScreen,
  ConfirmPasswordScreen,
  ForgotPasswordScreen,
  NewPasswordScreen,
} from '@screens'

export type TAuthParamsList = {
  [Screens.SignIn]: undefined,
  [Screens.SignUp]: undefined,
  [Screens.ConfirmEmail]: { email: string },
  [Screens.ConfirmPassword]: {
    password: string,
    confirmPassword: string,
  },
  [Screens.ForgotPassword]: undefined,
  [Screens.NewPassword]: undefined,
}

export type TAuthNavigationProp = NativeStackNavigationProp<TAuthParamsList>

const AuthStackNavigator = createNativeStackNavigator<TAuthParamsList>()

export const AuthNavigator: FC = () => (
  <AuthStackNavigator.Navigator screenOptions={{
    headerShown: false,
  }}
  >
    <AuthStackNavigator.Screen
      name={Screens.SignIn}
      component={SignInScreen}
    />
    <AuthStackNavigator.Screen
      name={Screens.SignUp}
      component={SignUpScreen}
    />
    <AuthStackNavigator.Screen
      name={Screens.ForgotPassword}
      component={ForgotPasswordScreen}
    />
    <AuthStackNavigator.Screen
      name={Screens.NewPassword}
      component={NewPasswordScreen}
    />
    <AuthStackNavigator.Screen
      name={Screens.ConfirmEmail}
      component={ConfirmEmailScreen}
    />
    <AuthStackNavigator.Screen
      name={Screens.ConfirmPassword}
      component={ConfirmPasswordScreen}
    />
  </AuthStackNavigator.Navigator>
)
