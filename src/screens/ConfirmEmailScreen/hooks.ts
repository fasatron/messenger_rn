import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

import { TAuthNavigationProp, TAuthParamsList } from '@navigation'
import { Screens } from '@config'
import { useAuthContext } from '@hooks'

export const useConfirmEmailScreen = () => {
  const { navigate } = useNavigation<TAuthNavigationProp>()
  const {
    params: {
      email,
    },
  } = useRoute<RouteProp<TAuthParamsList, Screens.ConfirmEmail>>()
  const { confirmEmail, resendCode } = useAuthContext()

  const handleConfirmPress = async (code: string) => {
    const res = await confirmEmail(email, code)

    if (!res) return

    navigate(Screens.SignIn)
  }

  const handleResendPress = async () => {
    await resendCode(email)
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
