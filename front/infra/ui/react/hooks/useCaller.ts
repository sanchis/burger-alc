import { useEffect, useState } from 'react'

interface HookModel<T>{
  loading: boolean
  error: any
  data: T | undefined
}
export function useCaller<Response, ParamType = any> (promiseFn: (params?: ParamType) => Promise<Response>, params?: ParamType): HookModel<Response> {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Response>()
  const [error, setError] = useState()

  useEffect(() => {
    setLoading(true)
    promiseFn(params)
      .then(response => setData(response))
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    data,
    error
  }
}
