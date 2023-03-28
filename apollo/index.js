/* import { ApolloClient, InMemoryCache } from "@apollo/client"
let ACCESSTOKEN

if (typeof window !== "undefined") {
  ACCESSTOKEN = localStorage.getItem("accessToken")
  console.log("Acccess Tken", ACCESSTOKEN)
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_APOLLO_URI,
  // uri: "http://localhost:3000/graphql",
  headers: {
    authorization: ACCESSTOKEN ? `Bearer ${ACCESSTOKEN}` : "",
  },
  cache: new InMemoryCache(),
})
export default client
 */

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: ACCESSTOKEN ? `Bearer ${ACCESSTOKEN}` : "",
    },
  }
})
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_APOLLO_URI,
})
let ACCESSTOKEN
export const getApolloClient = () => {
  if (typeof window !== "undefined") {
    ACCESSTOKEN = localStorage.getItem("accessToken")
    console.log("!@£$", ACCESSTOKEN)
  }
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}
