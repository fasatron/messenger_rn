import React, { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { spacings } from '@theme'
import { User } from '@api'

import { ContactListItem } from './ContactListItem'

interface IContactListProps {
  contacts: User[],
  onContactPress: (id: string) => void,
}

export const ContactList: FC<IContactListProps> = ({ contacts, onContactPress }) => (
  <View style={styles.container}>
    <FlatList
      data={contacts}
      renderItem={({ item }) => (
        <ContactListItem
          contact={item}
          onContactPress={onContactPress}
        />
      )}
      keyExtractor={({ id }) => id}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacings.screen,
    paddingTop: 20,
  },
})
