import { useCallback, useEffect, useState } from 'react'

interface HookModel<T>{
  loading: boolean
  error: any
  data: T | undefined
  fetch: () => void
}
export function useCaller<Response> (promiseFn: () => Promise<Response>, callOnload = false): HookModel<Response> {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Response>()
  const [error, setError] = useState()

  const callFunction = useCallback(() => {
    setLoading(true)
    promiseFn()
      .then(response => setData(response))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (callOnload) {
      callFunction()
    }
  }, [])

  return {
    loading,
    data,
    fetch: callFunction,
    error
  }
}
