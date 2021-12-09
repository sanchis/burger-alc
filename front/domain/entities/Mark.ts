
export interface Mark {
  id: string
  mark: number
  comment: string
  createdAt: string
}

export interface CreateMark {
  mark: number
  comment: string
  burgerId: string
}
