import { useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'

import { API, graphqlOperation } from 'aws-amplify'
import compact from 'lodash/compact'
import filter from 'lodash/filter'

import { Screens } from '@config'
import {
  useAsync,
  Status,
  useAuthContext,
  chatClient,
  useStreamContext,
  ChatType,
} from '@hooks'
import { listUsers } from '@graphql/queries'
import { ListUsersQuery } from '@api'
import { TChatNavigationProp } from '@navigation'

interface IResponse {
  data: ListUsersQuery,
}

export const useContactsScreen = () => {
  const { user: currentUser } = useAuthContext()
  const { navigate } = useNavigation<TChatNavigationProp>()
  const { setChannel } = useStreamContext()

  const fetchUsers = useCallback(async () => {
    const res = await API.graphql(graphqlOperation(listUsers)) as IResponse

    return compact(res.data.listUsers?.items)
  }, [])

  const { value: users, status } = useAsync(fetchUsers)

  const contacts = filter(users, ({ id }) => id !== currentUser?.id)

  const handleContactPress = async (userId: string) => {
    const channel = chatClient.channel(ChatType.Personal, {
      members: [userId, currentUser!.id],
    })

    await channel.create()

    setChannel(channel)
    navigate(Screens.ChatRoom)
  }

  return {
    contacts,
    handleContactPress,
    isLoading: status === Status.Pending,
  }
}
