import React, { FC } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import { spacings } from '@theme'
import { Loader, Text } from '@components'
import { useAuthContext } from '@hooks'

import { useSignInScreen } from './hooks'
import { Form } from './Form'

export const SignInScreen: FC = () => {
  const {
    onSubmit,
    handleSignUpPress,
    handleForgotPasswordPress,
  } = useSignInScreen()
  const { isLoading } = useAuthContext()

  if (isLoading) return <Loader />

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Form onSubmit={onSubmit} />
          <Text
            bold
            accent
            style={styles.forgotPassword}
            onPress={handleForgotPasswordPress}
          >
            Forgot password?
          </Text>
          <View style={styles.bottomTextContainer}>
            <Text>
              Don&apos;t have an account?
            </Text>
            <Text>{' '}</Text>
            <Text
              bold
              accent
              onPress={handleSignUpPress}
            >
              Sign up
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: spacings.screen,
    backgroundColor: '#fff',
  },
  contentContainer: {
    alignItems: 'center',
  },
  forgotPassword: {
    marginBottom: 15,
  },
  bottomTextContainer: {
    flexDirection: 'row',
  },
})
