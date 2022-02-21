import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { ContactList } from '@components'

export const ContactsScreen: FC = () => (
  <View style={styles.container}>
    <ContactList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
