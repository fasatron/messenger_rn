import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { spacings } from '@theme'
import { Button, ConfirmCodeField, Text } from '@components'

import { useConfirmEmailScreen } from './hooks'

export const ConfirmEmailScreen: FC = () => {
  const {
    handleConfirmPress,
    handleResendPress,
    handleBackToSignInPress,
  } = useConfirmEmailScreen()

  return (
    <View style={styles.container}>
      <Text
        lg
        bold
        style={styles.title}
        accessibilityRole='header'
      >
        Confirm your email
      </Text>
      <ConfirmCodeField onConfirmPress={handleConfirmPress} />
      <Button
        title='Resend code'
        style={styles.button}
        onPress={handleResendPress}
      />
      <Text
        bold
        accent
        style={styles.backToSignIn}
        onPress={handleBackToSignInPress}
      >
        Back to Sign In
      </Text>
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
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginBottom: 15,
  },
  backToSignIn: {
    textAlign: 'center',
  },
})
