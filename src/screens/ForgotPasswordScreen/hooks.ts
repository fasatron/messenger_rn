import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { TAuthNavigationProp } from '@navigation'

interface IFormData {
  email: string,
}

export const useForgotPasswordScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()

  const formMethods = useForm<IFormData>()
  const { handleSubmit } = formMethods

  const handleBackToSignInPress = () => {
    navigate(Screens.SignIn)
  }

  const onSubmit: SubmitHandler<IFormData> = ({ email }) => {
    console.log('email', email)
    navigate(Screens.NewPassword)
  }

  return {
    formMethods,
    handleButtonPress: handleSubmit(onSubmit),
    handleBackToSignInPress,
  }
}
