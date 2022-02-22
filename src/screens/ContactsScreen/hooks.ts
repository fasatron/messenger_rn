import { useCallback } from 'react'

import { API, graphqlOperation } from 'aws-amplify'
import compact from 'lodash/compact'
import filter from 'lodash/filter'

import { useAsync, Status, useAuthContext } from '@hooks'
import { listUsers } from '@graphql/queries'
import { ListUsersQuery } from '@api'

interface IResponse {
  data: ListUsersQuery,
}

export const useContactsScreen = () => {
  const { user: currentUser } = useAuthContext()

  const handleContactPress = (id: string) => {
    console.log('id', id)
  }

  const fetchUsers = useCallback(async () => {
    const res = await API.graphql(graphqlOperation(listUsers)) as IResponse

    return compact(res.data.listUsers?.items)
  }, [])

  const { value: users, status } = useAsync(fetchUsers)

  const contacts = filter(users, ({ id }) => id !== currentUser?.id)

  return {
    contacts,
    handleContactPress,
    isLoading: status === Status.Pending,
  }
}
