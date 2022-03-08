import React, { FC } from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import Avatar from '@muhzi/react-native-user-avatar'

import { Text } from '@components'
import { User } from '@api'

interface IContactListItemProps {
  contact: User,
  onContactPress: (id: string) => void,
}

export const ContactListItem: FC<IContactListItemProps> = ({
  contact: {
    id,
    name,
    photoUrl,
  },
  onContactPress,
}) => (
  <Pressable
    style={styles.container}
    onPress={() => onContactPress(id)}
  >
    <Avatar
      userName={name}
      src={photoUrl}
      size={48}
      backgroundColor='#585FC8'
    />
    <View style={styles.infoBlock}>
      <Text bold>{name}</Text>
    </View>
  </Pressable>
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
