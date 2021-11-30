import { PrismaClientKnownRequestError } from '@prisma/client/runtime'
import { AlreadyExistError, ElementNotFoundError } from '.'

export default function PrismaCodeToError (error: PrismaClientKnownRequestError): any {
  switch (error.code) {
    case 'P2025':
      throw new ElementNotFoundError()
    case 'P2002':
      throw new AlreadyExistError()
  }
  return error
}
