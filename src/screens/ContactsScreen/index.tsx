import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { ContactList, Loader } from '@components'

import { useContactsScreen } from './hooks'

export const ContactsScreen: FC = () => {
  const {
    handleContactPress,
    contacts,
    isLoading,
  } = useContactsScreen()

  if (isLoading) return <Loader />

  return (
    <View style={styles.container}>
      <ContactList
        contacts={contacts}
        onContactPress={handleContactPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
