import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

import { TAuthNavigationProp, TAuthParamsList } from '@navigation'
import { Screens } from '@config'

export const useConfirmEmailScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()
  const {
    params: {
      email,
    },
  } = useRoute<RouteProp<TAuthParamsList, Screens.ConfirmEmail>>()

  const handleConfirmPress = (code: string) => {
    console.log('code', code, 'email', email)
  }

  const handleResendPress = () => {

  }

  const handleBackToSignInPress = () => {
    navigate(Screens.SignIn)
  }

  return {
    handleConfirmPress,
    handleResendPress,
    handleBackToSignInPress,
  }
}
