import { Auth } from 'aws-amplify'
import React, { FC } from 'react'
import { Text, View } from 'react-native'

export const ChatsScreens: FC = () => (
  <View>
    <Text onPress={() => Auth.signOut()}>ChatsScreens</Text>
  </View>
)
