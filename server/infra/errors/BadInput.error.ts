import BurgerRankingError from 'server/domain/BurgerRankingError'

export class BadInputError extends Error implements BurgerRankingError {
  public readonly code = '400'
  constructor (message: string) {
    super(`Incorrect parameter: ${message}`)
  }
}
