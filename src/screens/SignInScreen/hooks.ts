import { SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { TAuthNavigationProp } from '@navigation'
import { useAuthContext } from '@hooks'

import { IFormData } from './types'

export const useSignInScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()
  const { signIn } = useAuthContext()

  const onSubmit: SubmitHandler<IFormData> = async ({ email, password }) => {
    await signIn(email, password)
  }

  const handleForgotPasswordPress = () => {
    navigate(Screens.NewPassword)
  }

  const handleSignUpPress = () => {
    navigate(Screens.SignUp)
  }

  return {
    onSubmit,
    handleSignUpPress,
    handleForgotPasswordPress,
  }
}
