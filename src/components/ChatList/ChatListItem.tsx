import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import Avatar from '@muhzi/react-native-user-avatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { ChannelPreviewMessengerProps } from 'stream-chat-react-native'

import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import format from 'date-fns/format'
import { Channel } from 'stream-chat'

import { Screens } from '@config'
import { colors } from '@theme'
import { ChatType, useAuthContext, useStreamContext } from '@hooks'
import { TChatNavigationProp } from '@navigation'
import { Text } from '@components'
import IconRead from '@assets/images/icon-read.svg'

const getFormattedDate = (dateISO: string) => {
  const date = Date.parse(dateISO)

  if (isToday(date)) return format(date, 'hh.mm a')
  if (isYesterday(date)) return 'Yesterday'

  return format(date, 'dd.MM.yy')
}

export const ChatListItem: FC<ChannelPreviewMessengerProps> = ({
  latestMessagePreview,
  unread,
  channel,
}) => {
  const { user: currentUser } = useAuthContext()
  const { navigate } = useNavigation<TChatNavigationProp>()
  const { setChannel, getInterlocutor } = useStreamContext()

  if (!latestMessagePreview?.messageObject) return null

  const {
    messageObject,
    previews,
    status,
  } = latestMessagePreview

  const isPersonalChat = channel.type === ChatType.Personal
  const hasUnreadMessages = Boolean(unread && unread > 0)

  const date = messageObject.created_at
  const isMessageReceived = messageObject.status === 'received'
  const isMyMessage = messageObject.user?.id === currentUser?.id
  const messageContent = previews?.[1]?.text
  const isMessageRead = status === 2

  const user = getInterlocutor(channel as unknown as Channel)

  const title = isPersonalChat ? user?.name : channel.data?.name
  const image = isPersonalChat ? user?.image : null

  const handlePress = async () => {
    setChannel(channel as unknown as Channel)
    navigate(Screens.ChatRoom)
  }

  return (
    <TouchableOpacity
      disallowInterruption
      style={[styles.container, hasUnreadMessages && styles.unread]}
      onPress={handlePress}
    >
      <Avatar
        userName={title}
        src={image}
        size={48}
        active={isPersonalChat && user?.online}
        backgroundColor='#585FC8'
      />
      <View style={styles.infoBlock}>
        <View style={styles.line}>
          <Text bold>{title}</Text>
          <Text
            sm
            secondary
            style={styles.date}
          >
            {date && getFormattedDate(date as string)}
          </Text>
        </View>
        <View style={styles.line}>
          {isMessageReceived && (
            <View style={styles.lastMessageContainer}>
              {isMyMessage && (
                <IconRead
                  style={styles.iconRead}
                  fill={isMessageRead ? colors.accent : colors.secondary}
                />
              )}
              <Text
                sm
                secondary
                ellipsizeMode='tail'
                numberOfLines={1}
              >
                {messageContent}
              </Text>
            </View>
          )}
          {hasUnreadMessages && (
            <View style={styles.unreadMessagesBadge}>
              <Text
                sm
                bold
                style={styles.unreadMessagesCount}
              >
                {unread}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
    borderRadius: 8,
  },
  unread: {
    backgroundColor: '#E7F0FB',
  },
  infoBlock: {
    flex: 1,
    height: '100%',
    marginLeft: 15,
    justifyContent: 'space-around',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  lastMessageContainer: {
    flexDirection: 'row',
    maxWidth: '90%',
    alignItems: 'center',
  },
  iconRead: {
    top: 1,
    marginRight: 5,
  },
  date: {
    color: '#333333',
  },
  unreadMessagesBadge: {
    position: 'absolute',
    right: 0,
    bottom: -6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadMessagesCount: {
    color: '#fff',
  },
})
