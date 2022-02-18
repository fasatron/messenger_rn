import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

import { TAuthNavigationProp, TAuthParamsList } from '@navigation'
import { Screens } from '@config'
import { useAuthContext } from '@hooks'

export const useConfirmPasswordScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()
  const {
    params: {
      email,
      password,
    },
  } = useRoute<RouteProp<TAuthParamsList, Screens.ConfirmPassword>>()
  const { confirmPassword } = useAuthContext()

  const handleConfirmPress = async (code: string) => {
    const res = await confirmPassword({
      email,
      password,
      code,
    })

    if (!res) return

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
