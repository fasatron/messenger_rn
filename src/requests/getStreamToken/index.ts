import Config from 'react-native-config'

export const getStreamToken = async (userId: string): Promise<string | undefined> => {
  const url = `${Config.LAMBDA_API_URL}?id=${userId}`
  const response = await fetch(url)
  const data = await response.json()

  return data.data?.token
}
