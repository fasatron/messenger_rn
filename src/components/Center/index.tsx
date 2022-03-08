import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

export const Center: FC = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
