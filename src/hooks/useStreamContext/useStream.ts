import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import Config from 'react-native-config'

import { Channel, ChannelFilters, StreamChat } from 'stream-chat'
import find from 'lodash/find'

import { getStreamToken } from '@requests'
import { useAuthContext, useToast } from '@hooks'

export const chatClient = StreamChat.getInstance(Config.STREAM_API_KEY)

export enum ChatType {
  All = 'all',
  Personal = 'messaging',
  Group = 'team',
}

export const useStream = () => {
  const [clientReady, setClientReady] = useState(false)
  const [channel, setChannel] = useState<Channel | null>(null)
  const [isSearching, setIsSearching] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [chatType, setChatType] = useState(ChatType.All)

  const { user: currentUser } = useAuthContext()
  const { showErrorMessage } = useToast()

  const nameKey = chatType === ChatType.Personal
    ? 'member.user.name'
    : 'name'

  const filters: ChannelFilters = useMemo(() => ({
    joined: true,
    type: chatType === ChatType.All ? undefined : chatType,
    ...(searchQuery && {
      [nameKey]: {
        $autocomplete: searchQuery,
      },
    }),
  }), [chatType, nameKey, searchQuery])

  const handleSearchButtonPress = useCallback(() => {
    setIsSearching(true)

    if (chatType === ChatType.All) {
      setChatType(ChatType.Personal)
    }
  }, [chatType])

  const handleClearSearchField = useCallback(() => {
    setSearchQuery('')
  }, [])

  const handleBackPress = useCallback(() => {
    setIsSearching(false)
    handleClearSearchField()
  }, [handleClearSearchField])

  const getInterlocutor = useCallback((cnl: Channel) => {
    const member = find(cnl.state.members, ({ user_id }) => user_id !== currentUser?.id)

    return member?.user
  }, [currentUser?.id])

  useEffect(() => {
    const setupClient = async () => {
      try {
        if (!currentUser?.id) return

        const token = await getStreamToken(currentUser.id)

        if (!token) return

        await chatClient.connectUser({
          id: currentUser.id,
          name: currentUser.name,
          image: currentUser.photoUrl,
        }, token)

        setClientReady(true)
      } catch (error) {
        showErrorMessage(error)
      }
    }

    setupClient()
  }, [showErrorMessage, currentUser])

  return {
    clientReady,
    channel,
    isSearching,
    searchQuery,
    filters,
    chatType,
    setChannel,
    getInterlocutor,
    handleSearchButtonPress,
    handleBackPress,
    handleClearSearchField,
    handleSearchQueryChange: setSearchQuery,
    handleSelectChatType: setChatType,
  }
}
