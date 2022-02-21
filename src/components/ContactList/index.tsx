import React, { FC } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import { spacings } from '@theme'

import { ContactListItem } from './ContactListItem'

const data = [
  {
    id: 1,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 2,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 3,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 4,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 5,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 6,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 7,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 8,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 9,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 10,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 11,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 12,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 13,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 14,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
  {
    id: 15,
    photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
    name: 'Darlene Steward',
  },
]

export const ContactList: FC = () => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ContactListItem user={item} />
      )}
      keyExtractor={({ id }) => String(id)}
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
