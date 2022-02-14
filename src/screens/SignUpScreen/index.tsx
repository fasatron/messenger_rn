import React, { FC } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import { spacings } from '@theme'
import { Text } from '@components'

import { useSignUpScreen } from './hooks'
import { Form } from './Form'

export const SignUpScreen: FC = () => {
  const {
    onSubmit,
    handleSignInPress,
  } = useSignUpScreen()

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <Form onSubmit={onSubmit} />
          <View style={styles.bottomTextContainer}>
            <Text>
              Already have an account?
            </Text>
            <Text>{' '}</Text>
            <Text
              bold
              accent
              onPress={handleSignInPress}
            >
              Sign in
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
  bottomTextContainer: {
    flexDirection: 'row',
  },
})
