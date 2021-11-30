import { NextApiRequest, NextApiResponse } from 'next'
import { createServer } from '../../server/graphql'

export default async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  return await createServer(req, res)
}

export const config = {
  api: {
    bodyParser: false
  }
}
