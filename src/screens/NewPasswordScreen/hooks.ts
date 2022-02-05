import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { validators as baseValidators } from '@utils'
import { TAuthNavigationProp } from '@navigation'

interface IFormData {
  password: string,
  confirmPassword: string,
}

export const useNewPasswordScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()

  const formMethods = useForm<IFormData>()
  const { handleSubmit } = formMethods

  const validators = {
    ...baseValidators,
    confirmPassword: {
      required: 'Confirm your password',
      validate: (value: string) => (
        value === formMethods.getValues('password') || 'Password mismatch'
      ),
    },
  }

  const handleBackToSignInPress = () => {
    navigate(Screens.SignIn)
  }

  const onSubmit: SubmitHandler<IFormData> = ({ password, confirmPassword }) => {
    console.log('password', password, 'confirmPassword', confirmPassword)
    navigate(Screens.ConfirmPassword, {
      password,
      confirmPassword,
    })
  }

  return {
    formMethods,
    validators,
    handleButtonPress: handleSubmit(onSubmit),
    handleBackToSignInPress,
  }
}
