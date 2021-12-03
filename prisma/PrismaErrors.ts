import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { AlreadyExistError, ElementNotFoundError } from '../server/infra/errors'

export default function PrismaCodeToError (error: PrismaClientKnownRequestError): any {
  const errorMatcher = {
    P2025: new ElementNotFoundError(),
    P2002: new AlreadyExistError()
  } as any

  throw (errorMatcher[error.code] ?? error)
}
