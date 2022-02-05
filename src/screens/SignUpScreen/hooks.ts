import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'

import { Screens } from '@config'
import { validators as baseValidators } from '@utils'
import { TAuthNavigationProp } from '@navigation'

interface IFormData {
  email: string,
  password: string,
  confirmPassword: string,
  firstName: string,
  lastName: string,
}

export const useSignUpScreen = () => {
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
    firstName: {
      required: 'First Name is required',
    },
    lastName: {
      required: 'Last Name is required',
    },
  }

  const handleSignInPress = () => {
    navigate(Screens.SignIn)
  }

  const onSubmit: SubmitHandler<IFormData> = ({ email }) => {
    navigate(Screens.ConfirmEmail, { email })
  }

  return {
    formMethods,
    validators,
    handleButtonPress: handleSubmit(onSubmit),
    handleSignInPress,
  }
}
