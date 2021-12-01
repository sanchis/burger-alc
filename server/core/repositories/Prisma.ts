import { PrismaClient } from '.prisma/client'

declare const global: any
export default class PrismaDb {
  public readonly db: PrismaClient
  constructor () {
    if (process.env.NODE_ENV === 'production') {
      this.db = new PrismaClient()
    } else {
      this.db = global.prisma ?? new PrismaClient()
      global.prisma = this.db
    }
  }
}
