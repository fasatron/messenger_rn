import { SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { TAuthNavigationProp } from '@navigation'

import { IFormData } from './types'

export const useSignUpScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()

  const handleSignInPress = () => {
    navigate(Screens.SignIn)
  }

  const onSubmit: SubmitHandler<IFormData> = ({ email, ...props }) => {
    console.log('props', props);
    
    navigate(Screens.ConfirmEmail, { email })
  }

  return {
    onSubmit,
    handleSignInPress,
  }
}
