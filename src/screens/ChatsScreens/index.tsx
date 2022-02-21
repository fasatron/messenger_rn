import React, { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { colors } from '@theme'
import { ChatList } from '@components'

export const ChatsScreens: FC = () => (
  <View style={styles.container}>
    <ChatList />
    <Pressable style={styles.startMessage}>
      <Ionicons
        name='chatbubble'
        color='#fff'
        size={24}
      />
      <Ionicons
        style={styles.addIcon}
        name='add-outline'
        color={colors.accent}
        size={16}
      />
    </Pressable>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startMessage: {
    position: 'absolute',
    bottom: 32,
    right: 25,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    backgroundColor: colors.accent,
  },
  addIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {
        translateX: -8,
      },
      {
        translateY: -8,
      },
    ],
  },
})
