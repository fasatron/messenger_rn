import React, { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { colors, spacings } from '@theme'
import { Screens } from '@config'
import { TChatNavigationProp } from '@navigation'
import { ChatList, ToggleButton, ToggleButtonGroup } from '@components'
import { useStreamContext, ChatType } from '@hooks'

export const ChatsScreens: FC = () => {
  const { navigate } = useNavigation<TChatNavigationProp>()
  const {
    handleSelectChatType,
    chatType,
    isSearching,
  } = useStreamContext()

  const handleMewMessagePress = () => {
    navigate(Screens.Contacts)
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonGroupContainer}>
        <ToggleButtonGroup
          value={chatType}
          onChange={handleSelectChatType}
        >
          <ToggleButton
            value={ChatType.All}
            title='All chats'
            disabled={isSearching}
          />
          <ToggleButton
            value={ChatType.Personal}
            title='Personal'
          />
          <ToggleButton
            value={ChatType.Group}
            title='Groups'
          />
        </ToggleButtonGroup>
      </View>
      <ChatList />
      <Pressable
        style={styles.newMessageButton}
        onPress={handleMewMessagePress}
        accessibilityRole='button'
        accessibilityLabel='New message'
      >
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacings.screen,
  },
  buttonGroupContainer: {
    marginVertical: 24,
  },
  newMessageButton: {
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
