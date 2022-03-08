import React from 'react'
import { StyleSheet, View } from 'react-native'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Screens } from '@config'
import { colors } from '@theme'
import { defaultHeaderTitleStyle } from '@navigation'
import { ChatsScreens, ContactsScreen, ChatRoomScreen } from '@screens'
import { useStreamContext } from '@hooks'
import { Text, Input } from '@components'

export type TChatParamsList = {
  [Screens.Chats]: undefined,
  [Screens.Contacts]: undefined,
  [Screens.ChatRoom]: undefined,
}

export type TChatNavigationProp = NativeStackNavigationProp<TChatParamsList>

const ChatStackNavigator = createNativeStackNavigator<TChatParamsList>()

export const ChatNavigator = gestureHandlerRootHOC(() => {
  const {
    clientReady,
    isSearching,
    searchQuery,
    handleBackPress,
    handleSearchButtonPress,
    handleClearSearchField,
    handleSearchQueryChange,
  } = useStreamContext()

  if (!clientReady) return null

  return (
    <ChatStackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: defaultHeaderTitleStyle,
        headerBackTitleVisible: false,
      }}
    >
      <ChatStackNavigator.Screen
        name={Screens.Chats}
        options={{
          title: '',
          headerLeft: () => (
            isSearching
              ? (
                <View style={styles.searchInputContainer}>
                  <Ionicons
                    name='arrow-back-outline'
                    color={colors.primary}
                    size={24}
                    accessibilityLabel='Back'
                    accessibilityRole='button'
                    onPress={handleBackPress}
                  />
                  <Input
                    style={styles.searchInput}
                    keyboardType='default'
                    placeholder='Search...'
                    value={searchQuery}
                    onChangeText={handleSearchQueryChange}
                  />
                  {Boolean(searchQuery) && (
                    <Ionicons
                      name='close-outline'
                      color={colors.primary}
                      size={24}
                      accessibilityLabel='Clear'
                      accessibilityRole='button'
                      onPress={handleClearSearchField}
                    />
                  )}
                </View>
              )
              : (
                <Text style={defaultHeaderTitleStyle}>
                  Recent chats
                </Text>
              )
          ),
          headerRight: () => (
            isSearching ? (
              null
            ) : (
              <Ionicons
                name='search-outline'
                color={colors.primary}
                size={24}
                onPress={handleSearchButtonPress}
              />
            )
          ),
        }}
        component={ChatsScreens}
      />
      <ChatStackNavigator.Screen
        name={Screens.Contacts}
        component={ContactsScreen}
      />
      <ChatStackNavigator.Screen
        name={Screens.ChatRoom}
        component={ChatRoomScreen}
        options={{
          title: '',
        }}
      />
    </ChatStackNavigator.Navigator>
  )
})

const styles = StyleSheet.create({
  searchInputContainer: {
    paddingRight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderWidth: 0,
  },
})
