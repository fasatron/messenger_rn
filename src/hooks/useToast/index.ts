import { useToast as useToastNotifications } from 'react-native-toast-notifications'

export const useToast = () => {
  const toast = useToastNotifications()

  const showErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      toast.show(error.message, { type: 'danger' })
    } else if (typeof error === 'string') {
      toast.show(error, { type: 'danger' })
    }
  }

  const showSuccessMessage = (message: string) => {
    toast.show(message, { type: 'success' })
  }

  const showInfoMessage = (message: string) => {
    toast.show(message)
  }

  return {
    showSuccessMessage,
    showErrorMessage,
    showInfoMessage,
  }
}
