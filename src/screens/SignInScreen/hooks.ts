import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { TAuthNavigationProp } from '@navigation'

interface IFormData {
  email: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  lastName: string,
}

export const useSignInScreen = () => {
  const { navigate, addListener } = useNavigation<TAuthNavigationProp>()

  const formMethods = useForm<IFormData>()
  const { handleSubmit, reset } = formMethods

  const handleForgotPasswordPress = () => {
    navigate(Screens.ForgotPassword)
  }

  const handleSignUpPress = () => {
    navigate(Screens.SignUp)
  }

  const onSubmit: SubmitHandler<IFormData> = () => {

  }

  useEffect(() => {
    const unsubscribe = addListener('focus', () => reset())

    return unsubscribe
  }, [addListener, reset])

  return {
    formMethods,
    handleButtonPress: handleSubmit(onSubmit),
    handleSignUpPress,
    handleForgotPasswordPress,
  }
}
