import { Prisma } from '.prisma/client'
import PrismaDb from '../server/core/repositories/Prisma'

const shops: Prisma.Enumerable<Prisma.ShopCreateManyInput> = [
  {
    name: 'Tribeca',
    address: 'C. San Fernando, 18, 03002 Alicante'
  },
  {
    name: 'Tepuy',
    address: 'Cl. Bazán, 47, 03001 Alicante'
  },
  {
    name: 'Cibum',
    address: 'C. Susana Llaneras, 54, 03001 Alicante'
  },
  {
    name: 'The Black Turtle',
    address: 'Carrer Castaños, 45, 03001 Alacant, Alicante'
  },
  {
    name: 'Big Twins',
    address: 'C. San Agatangelo, 15, 03007 Alicante'
  },
  {
    name: 'Rodeo Diner & Burger',
    address: 'Pl. del Rollo, 1, 03400 Villena, Alicante'
  }
]

const connection = new PrismaDb()

connection.db.shop.createMany({
  data: shops
}).catch(error => console.error(error))
