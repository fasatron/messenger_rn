import { useState, useEffect, useCallback } from 'react'

export enum Status {
  Idle,
  Pending,
  Success,
  Error,
}

export const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true,
) => {
  const [status, setStatus] = useState<Status>(Status.Idle)
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  const execute = useCallback(async () => {
    setStatus(Status.Pending)
    setValue(null)
    setError(null)

    try {
      const response = await asyncFunction()
      setValue(response)
      setStatus(Status.Success)
    } catch (err) {
      setError(err as E)
      setStatus(Status.Error)
    }
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return {
    execute,
    status,
    value,
    error,
  }
}
