import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import Cors from 'cors'

const apolloServer = new ApolloServer({ typeDefs, resolvers })
const startServer = apolloServer.start()

async function applyCors (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  return await new Promise((resolve, reject) => {
    Cors({
      methods: ['GET', 'POST', 'OPTIONS']
    })(req, res, async (result) => {
      if (result instanceof Error) {
        return reject(result)
      }
      return resolve(result)
    })
  })
}

export async function createServer (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (process.env.NODE_ENV !== 'production') {
    await applyCors(req, res)
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
}
