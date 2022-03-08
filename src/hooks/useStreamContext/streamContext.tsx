import React, {
  FC,
  useMemo,
  useContext,
  createContext,
} from 'react'
import { OverlayProvider } from 'stream-chat-react-native'

import { useStream } from './useStream'

type IStreamContext = ReturnType<typeof useStream>

export const StreamContext = createContext({} as IStreamContext)

export const StreamProvider: FC = ({ children }) => {
  const {
    channel,
    chatType,
    clientReady,
    filters,
    getInterlocutor,
    handleBackPress,
    handleClearSearchField,
    handleSearchButtonPress,
    handleSearchQueryChange,
    handleSelectChatType,
    isSearching,
    searchQuery,
    setChannel,
  } = useStream()

  const value = useMemo(() => ({
    channel,
    chatType,
    clientReady,
    filters,
    getInterlocutor,
    handleBackPress,
    handleClearSearchField,
    handleSearchButtonPress,
    handleSearchQueryChange,
    handleSelectChatType,
    isSearching,
    searchQuery,
    setChannel,
  }), [
    channel,
    chatType,
    clientReady,
    filters,
    getInterlocutor,
    handleBackPress,
    handleClearSearchField,
    handleSearchButtonPress,
    handleSearchQueryChange,
    handleSelectChatType,
    isSearching,
    searchQuery,
    setChannel,
  ])

  return (
    <StreamContext.Provider value={value}>
      <OverlayProvider>
        {children}
      </OverlayProvider>
    </StreamContext.Provider>
  )
}

export const useStreamContext = () => useContext(StreamContext)
