import { SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { TAuthNavigationProp } from '@navigation'
import { useAuthContext } from '@hooks'

import { IFormData } from './types'

export const useSignUpScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()
  const { signUp } = useAuthContext()

  const handleSignInPress = () => {
    navigate(Screens.SignIn)
  }

  const onSubmit: SubmitHandler<IFormData> = async ({
    email,
    password,
    firstName,
    lastName,
  }) => {
    const res = await signUp({
      email,
      password,
      firstName,
      lastName,
    })

    if (!res) return

    navigate(Screens.ConfirmEmail, { email })
  }

  return {
    onSubmit,
    handleSignInPress,
  }
}
