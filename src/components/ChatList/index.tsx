import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  ChannelList,
  Chat,
  EmptyStateIndicator,
  EmptyStateProps,
} from 'stream-chat-react-native'

import { chatClient, ChatType, useStreamContext } from '@hooks'
import { Text, Center } from '@components'

import { ChatListItem } from './ChatListItem'

const CustomEmptyStateIndicator: FC<EmptyStateProps> = ({ listType }) => {
  const { chatType } = useStreamContext()

  if (chatType !== ChatType.All) {
    return (
      <Center>
        <Text lg>No results found</Text>
      </Center>
    )
  }

  if (listType && ['channel', 'message'].includes(listType)) {
    return <EmptyStateIndicator listType={listType} />
  }

  return null
}

export const ChatList: FC = () => {
  const { filters } = useStreamContext()

  return (
    // @ts-expect-error
    <Chat client={chatClient}>
      <View style={styles.channelListconteiner}>
        <ChannelList
          filters={filters}
          Preview={ChatListItem}
          EmptyStateIndicator={CustomEmptyStateIndicator}
        />
      </View>
    </Chat>
  )
}

const styles = StyleSheet.create({
  channelListconteiner: {
    flex: 1,
  },
})
