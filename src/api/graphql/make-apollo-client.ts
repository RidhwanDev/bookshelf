import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Auth } from "aws-amplify";
import { RestLink } from "apollo-link-rest";

const authMiddleware = setContext(async (_, { headers }) => {
  try {
    const currentSession = await Auth.currentSession();
    const accessToken = currentSession.getAccessToken();
    const token = accessToken.getJwtToken();
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
  } catch (err) {
    return {
      headers,
    };
  }
});

const restLink = new RestLink({ uri: process.env.GOOGLE_BOOKS_API_URL });

const graphQLLink = createHttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
});

export const link = authMiddleware.concat(graphQLLink);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([restLink, link]),
});
