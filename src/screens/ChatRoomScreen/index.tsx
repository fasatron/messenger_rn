import React, { FC, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
} from 'stream-chat-react-native'

import { chatClient, useAuthContext, useStreamContext } from '@hooks'
import { TChatNavigationProp } from '@navigation'

export const ChatRoomScreen: FC = () => {
  const { setOptions } = useNavigation<TChatNavigationProp>()
  const { user: currentUser } = useAuthContext()
  const { channel, getInterlocutor } = useStreamContext()

  useEffect(() => {
    const setHeaderOptions = () => {
      if (!channel) return

      setOptions({
        title: getInterlocutor(channel)?.name,
      })
    }

    setHeaderOptions()
  }, [channel, currentUser, getInterlocutor, setOptions])

  if (!channel) return null

  return (
    // @ts-expect-error
    <Chat client={chatClient}>
      {/*
      // @ts-expect-error */}
      <Channel channel={channel}>
        <View style={StyleSheet.absoluteFill}>
          <MessageList />
          <MessageInput />
        </View>
      </Channel>
    </Chat>
  )
}
