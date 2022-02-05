import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { spacings } from '@theme'
import { ConfirmCodeField, Text } from '@components'

import { useConfirmPasswordScreen } from './hooks'

export const ConfirmPasswordScreen: FC = () => {
  const {
    handleConfirmPress,
    handleBackToSignInPress,
  } = useConfirmPasswordScreen()

  return (
    <View style={styles.container}>
      <Text
        lg
        bold
        style={styles.title}
        accessibilityRole='header'
      >
        Confirm your password
      </Text>
      <ConfirmCodeField onConfirmPress={handleConfirmPress} />
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
  backToSignIn: {
    textAlign: 'center',
  },
})
