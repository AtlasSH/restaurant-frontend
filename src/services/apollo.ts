import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://localhost:3333',
  cache: new InMemoryCache()
});
