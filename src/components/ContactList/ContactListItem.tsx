import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import Avatar from 'react-native-user-avatar'

import { Text } from '@components'

interface IContactListItemProps {
  user: {
    photoUrl: string,
    name: string,
  },
}

export const ContactListItem: FC<IContactListItemProps> = ({
  user: {
    name,
    photoUrl,
  },
}) => (
  <View style={styles.container}>
    <Avatar
      name={name}
      src={photoUrl}
      size={48}
    />
    <View style={styles.infoBlock}>
      <Text bold>{name}</Text>
    </View>
  </View>
)

export const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
    borderRadius: 8,
  },
  infoBlock: {
    flex: 1,
    height: '100%',
    marginLeft: 15,
    justifyContent: 'center',
  },
})
