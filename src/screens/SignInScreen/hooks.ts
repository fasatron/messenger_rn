import { SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { TAuthNavigationProp } from '@navigation'

import { IFormData } from './types'

export const useSignInScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()

  const onSubmit: SubmitHandler<IFormData> = ({ email, password }) => {
    console.log('email', email, 'password', password)
  }

  const handleForgotPasswordPress = () => {
    navigate(Screens.ForgotPassword)
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
