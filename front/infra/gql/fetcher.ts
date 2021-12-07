import axios from 'axios'

interface GraphqlResponse<T> {
  data: T
}
export default class GqlFetcher {
  async fetchGql<T>(query: string, variables?: any): Promise<T> {
    const data = {
      query,
      variables
    }
    return await axios.post<GraphqlResponse<T>>(process.env.NEXT_PUBLIC_ApiBaseUrl as string, data, {
      headers: {
        'Content-type': 'application/json'
      }
    }).then(response => response.data.data)
  }
}
