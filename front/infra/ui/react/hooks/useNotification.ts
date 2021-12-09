import { useToast } from '@chakra-ui/react'

export interface FrontNotification{
  title: string
  description?: string
  status: 'success'|'error'| 'warning'| 'info'
}

interface HookModel{
  showNotification: (notification: FrontNotification) => void
}
export function useNotification (): HookModel {
  const toast = useToast()

  function showNotification ({ title, status, description }: FrontNotification): void {
    toast({
      title,
      description,
      status,
      duration: 5000,
      isClosable: true,
      variant: 'solid'
    })
  }

  return {
    showNotification
  }
}
