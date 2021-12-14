import { useCallback, useState } from 'react'

export interface UseLazyCallerModel<Response, ParamsType>{
  loading: boolean
  error: any
  run: (params: ParamsType) => Promise<Response>
  data: Response | undefined
}
export function useLazyCaller<Response, ParamType = any> (promiseFn: (params: ParamType) => Promise<Response>): UseLazyCallerModel<Response, ParamType> {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Response>()
  const [error, setError] = useState()

  const run = useCallback(async (inputParams: ParamType) => {
    setLoading(true)
    return await promiseFn(inputParams)
      .then(response => {
        setData(response)
        return response
      })
      .catch(error => {
        setError(error)
        throw error
      })
      .finally(() => setLoading(false))
  }, [])

  return {
    loading,
    data,
    run,
    error
  }
}
