import React, { FC } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { AppNavigator } from '@navigation'

export const App: FC = () => (
  <SafeAreaView style={styles.container}>
    <AppNavigator />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
