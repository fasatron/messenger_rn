import { useNavigation } from '@react-navigation/native'
import { useForm, SubmitHandler } from 'react-hook-form'

import { TAuthNavigationProp } from '@navigation'

import { Screens } from '@config'
import { validators as baseValidators } from '@utils'
import { useAuthContext } from '@hooks'

interface IFormData {
  email: string,
  password: string,
  confirmPassword: string,
}

export const useNewPasswordScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()
  const { forgotPassword } = useAuthContext()

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

  const onSubmit: SubmitHandler<IFormData> = async ({ email, password }) => {
    const res = await forgotPassword(email)

    if (!res) return

    navigate(Screens.ConfirmPassword, {
      email,
      password,
    })
  }

  return {
    formMethods,
    validators,
    handleButtonPress: handleSubmit(onSubmit),
    handleBackToSignInPress,
  }
}
