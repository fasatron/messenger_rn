import { useCallback } from 'react'
import { useToast as useToastNotifications } from 'react-native-toast-notifications'

export const useToast = () => {
  const toast = useToastNotifications()

  const showErrorMessage = useCallback((error: unknown) => {
    if (error instanceof Error) {
      toast.show(error.message, { type: 'danger' })
    } else if (typeof error === 'string') {
      toast.show(error, { type: 'danger' })
    }
  }, [toast])

  const showSuccessMessage = useCallback((message: string) => {
    toast.show(message, { type: 'success' })
  }, [toast])

  const showInfoMessage = useCallback((message: string) => {
    toast.show(message)
  }, [toast])

  return {
    showSuccessMessage,
    showErrorMessage,
    showInfoMessage,
  }
}
