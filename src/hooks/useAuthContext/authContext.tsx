import React, { createContext, FC, useContext } from 'react'

import { useAuth } from './useAuth'

type TAuthContext = ReturnType<typeof useAuth>

export const AuthContext = createContext({} as TAuthContext)

export const AuthProvider: FC = ({ children }) => {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
