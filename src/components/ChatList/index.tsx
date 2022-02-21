import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import subDays from 'date-fns/subDays'

import { spacings } from '@theme'

import { ChatListItem } from './ChatListItem'

const data = [
  {
    id: 1,
    user: {
      photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
      name: 'Darlene Steward',
    },
    lastMessage: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo repellat modi temporibus quae voluptas, fugiat vero atque debitis! Perspiciatis officia nisi amet labore, mollitia culpa quis doloremque enim iste?',
      date: new Date().toISOString(),
    },
    unreadMessagesCount: 5,
  },
  {
    id: 2,
    user: {
      photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
      name: 'Darlene Steward',
    },
    lastMessage: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo repellat modi temporibus quae voluptas, fugiat vero atque debitis! Perspiciatis officia nisi amet labore, mollitia culpa quis doloremque enim iste?',
      date: subDays(new Date(), 1).toISOString(),
    },
    unreadMessagesCount: 0,
  },
  {
    id: 3,
    user: {
      photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
      name: 'Darlene Steward',
    },
    lastMessage: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo repellat modi temporibus quae voluptas, fugiat vero atque debitis! Perspiciatis officia nisi amet labore, mollitia culpa quis doloremque enim iste?',
      date: subDays(new Date(), 2).toISOString(),
    },
    unreadMessagesCount: 0,
  },
  {
    id: 4,
    user: {
      photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
      name: 'Darlene Steward',
    },
    lastMessage: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo repellat modi temporibus quae voluptas, fugiat vero atque debitis! Perspiciatis officia nisi amet labore, mollitia culpa quis doloremque enim iste?',
      date: subDays(new Date(), 3).toISOString(),
    },
    unreadMessagesCount: 0,
  },
  {
    id: 5,
    user: {
      photoUrl: 'https://i1.wp.com/roohentertainment.com/wp-content/uploads/2018/06/user-avatar-1.png?',
      name: 'Darlene Steward',
    },
    lastMessage: {
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quo repellat modi temporibus quae voluptas, fugiat vero atque debitis! Perspiciatis officia nisi amet labore, mollitia culpa quis doloremque enim iste?',
      date: subDays(new Date(), 4).toISOString(),
    },
    unreadMessagesCount: 0,
  },
]

export const ChatList = () => (
  <View style={styles.container}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ChatListItem
          user={item.user}
          lastMessage={item.lastMessage}
          unreadMessagesCount={item.unreadMessagesCount}
        />
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
