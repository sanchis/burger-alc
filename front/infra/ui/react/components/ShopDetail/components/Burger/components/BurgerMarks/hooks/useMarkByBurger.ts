import { Mark } from 'front/domain/entities/Mark'
import { useLazyCaller } from 'front/infra/ui/react/hooks/useLazyCaller'
import { MarkUseCase } from 'front/usecases'

interface HookModel{
  marks: Mark[]
  loading: boolean
  run: (burgerId: string) => void
}
export function useMarkByBurger (): HookModel {
  const { data, run, loading } = useLazyCaller<Mark[], string>(async (burgerId: string) => await MarkUseCase.findMarksByBurgerId(burgerId))

  return {
    loading,
    run,
    marks: data ?? []
  }
}
