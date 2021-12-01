import BurgerRankingError from '../interfaces/BurgerRankingError'

export class NotImplementedError extends Error implements BurgerRankingError {
  public readonly code = '501'
  constructor () {
    super('Not implemented')
  }
}
