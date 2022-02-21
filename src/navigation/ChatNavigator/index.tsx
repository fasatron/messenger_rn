import React, { FC } from 'react'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Screens } from '@config'
import { ChatsScreens, ContactsScreen } from '@screens'
import { defaultHeaderTitleStyle } from '@navigation'

export type TChatParamsList = {
  [Screens.Chats]: undefined,
  [Screens.Contacts]: undefined,
}

export type TChatNavigationProp = NativeStackNavigationProp<TChatParamsList>

const ChatStackNavigator = createNativeStackNavigator<TChatParamsList>()

export const ChatNavigator: FC = () => (
  <ChatStackNavigator.Navigator>
    <ChatStackNavigator.Screen
      name={Screens.Chats}
      options={{
        title: 'Recent chats',
        headerTitleStyle: defaultHeaderTitleStyle,
      }}
      component={ChatsScreens}
    />
    <ChatStackNavigator.Screen
      name={Screens.Contacts}
      component={ContactsScreen}
    />
  </ChatStackNavigator.Navigator>
)
