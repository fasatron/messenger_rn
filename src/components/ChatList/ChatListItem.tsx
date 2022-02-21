import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import Avatar from 'react-native-user-avatar'
import isToday from 'date-fns/isToday'
import isYesterday from 'date-fns/isYesterday'
import format from 'date-fns/format'

import { colors } from '@theme'
import { Text } from '@components'

const DATE_FORMAT = 'dd.MM.yy'

const getFormattedDate = (dateISO: string) => {
  const date = Date.parse(dateISO)

  if (isToday(date)) return 'Today'
  if (isYesterday(date)) return 'Yesterday'

  return format(date, DATE_FORMAT)
}

interface IChatListItemProps {
  user: {
    photoUrl: string,
    name: string,
  },
  lastMessage: {
    date: string,
    content: string,
  },
  unreadMessagesCount: number,
}

export const ChatListItem: FC<IChatListItemProps> = ({
  user: {
    name,
    photoUrl,
  },
  lastMessage: {
    date,
    content,
  },
  unreadMessagesCount,
}) => {
  const hasUnreadMessages = unreadMessagesCount > 0

  return (
    <View style={[styles.container, hasUnreadMessages && styles.unread]}>
      <Avatar
        name={name}
        src={photoUrl}
        size={48}
      />
      <View style={styles.infoBlock}>
        <View style={styles.line}>
          <Text bold>{name}</Text>
          <Text
            sm
            secondary
            style={styles.date}
          >
            {getFormattedDate(date)}
          </Text>
        </View>
        <View style={styles.line}>
          <Text
            sm
            secondary
            ellipsizeMode='tail'
            numberOfLines={1}
            style={styles.lastMessage}
          >
            {content}
          </Text>
          {hasUnreadMessages && (
            <View style={styles.unreadMessagesBadge}>
              <Text
                sm
                bold
                style={styles.unreadMessagesCount}
              >
                {unreadMessagesCount}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
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
    justifyContent: 'space-between',
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
  },
  lastMessage: {
    maxWidth: '90%',
  },
  date: {
    color: '#333333',
  },
  unreadMessagesBadge: {
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
