import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

import { TAuthNavigationProp, TAuthParamsList } from '@navigation'
import { Screens } from '@config'

export const useConfirmPasswordScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()
  const {
    params: {
      password,
      confirmPassword,
    },
  } = useRoute<RouteProp<TAuthParamsList, Screens.ConfirmPassword>>()

  const handleConfirmPress = (code: string) => {
    console.log('code', code, 'password', password, 'confirmPassword', confirmPassword)

    navigate(Screens.SignIn)
  }

  const handleBackToSignInPress = () => {
    navigate(Screens.SignIn)
  }

  return {
    handleConfirmPress,
    handleBackToSignInPress,
  }
}
