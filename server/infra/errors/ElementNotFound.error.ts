import BurgerRankingError from 'server/domain/BurgerRankingError'

export class ElementNotFoundError extends Error implements BurgerRankingError {
  public readonly code = '404'
  constructor () {
    super('Element not found')
  }
}
