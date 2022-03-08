import React, { FC } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications'

import { AppNavigator } from '@navigation'
import { AuthProvider, StreamProvider } from '@hooks'

export const App: FC = () => (
  <ToastProvider placement='top' style={styles.toast}>
    <AuthProvider>
      <StreamProvider>
        <SafeAreaView style={styles.container}>
          <AppNavigator />
        </SafeAreaView>
      </StreamProvider>
    </AuthProvider>
  </ToastProvider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toast: {
    top: '10%',
  },
})
