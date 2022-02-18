import { useEffect, useState, useCallback } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'
import { HubCallback } from '@aws-amplify/core/lib/Hub'

import { infoMessages, successMessages } from '@config'
import { useToast } from '@hooks'

interface ISignUpParams {
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

interface IConfirmPasswordParams {
  email: string,
  password: string,
  code: string,
}

export const useAuth = () => {
  const [user, setUser] = useState<CognitoUser | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const {
    showErrorMessage,
    showInfoMessage,
    showSuccessMessage,
  } = useToast()

  const checkUser = useCallback(async () => {
    try {
      setIsLoading(true)

      const authUser: CognitoUser | null = (
        await Auth.currentAuthenticatedUser({ bypassCache: true })
      )

      setIsLoading(false)
      setUser(authUser)
    } catch (error) {
      setIsLoading(false)
      setUser(null)
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      await Auth.signIn({
        username: email,
        password,
      })
    } catch (error) {
      showErrorMessage(error)
    }
  }

  const signUp = async ({
    email,
    password,
    firstName,
    lastName,
  }: ISignUpParams) => {
    try {
      const res = await Auth.signUp({
        username: email,
        password,
        attributes: {
          given_name: firstName,
          family_name: lastName,
        },
      })

      showInfoMessage(infoMessages.weSentCode)

      return res
    } catch (error) {
      showErrorMessage(error)

      return null
    }
  }

  const signOut = () => Auth.signOut()

  const confirmEmail = async (email: string, code: string) => {
    try {
      const res = await Auth.confirmSignUp(email, code)

      showSuccessMessage(successMessages.accountCreated)

      return res
    } catch (error) {
      showErrorMessage(error)

      return null
    }
  }

  const resendCode = async (email: string) => {
    try {
      await Auth.resendSignUp(email)
    } catch (error) {
      showErrorMessage(error)
    }
  }

  const forgotPassword = async (email: string) => {
    try {
      const res = await Auth.forgotPassword(email)

      showInfoMessage(infoMessages.weSentCode)

      return res
    } catch (error) {
      showErrorMessage(error)

      return null
    }
  }

  const confirmPassword = async ({ email, code, password }: IConfirmPasswordParams) => {
    try {
      const res = await Auth.forgotPasswordSubmit(email, code, password)

      showSuccessMessage(successMessages.passwordChanged)

      return res
    } catch (error) {
      showErrorMessage(error)

      return null
    }
  }

  useEffect(() => {
    const listener: HubCallback = ({ payload: { event } }) => {
      if (event === 'signIn' || event === 'signOut') {
        checkUser()
      }
    }

    Hub.listen('auth', listener)

    return () => Hub.remove('auth', listener)
  }, [checkUser])

  useEffect(() => {
    checkUser()
  }, [checkUser])

  return {
    isLoading,
    user,
    signIn,
    signUp,
    signOut,
    confirmEmail,
    confirmPassword,
    resendCode,
    forgotPassword,
  }
}
