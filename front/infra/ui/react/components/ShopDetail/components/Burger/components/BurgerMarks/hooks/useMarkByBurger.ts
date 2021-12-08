import { Mark } from 'front/domain/entities/Mark'
import { useCaller } from 'front/infra/ui/react/hooks/useCaller'
import { MarkUseCase } from 'front/usecases'

interface HookModel{
  marks: Mark[]
  loading: boolean
  fetch: () => void
}
export function useMarkByBurger (burgerId: string): HookModel {
  const { data, fetch, loading } = useCaller(async () => await MarkUseCase.findMarksByBurgerId(burgerId), false)

  return {
    loading,
    fetch,
    marks: data ?? []
  }
}
