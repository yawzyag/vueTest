import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import VueApollo from "vue-apollo";
import { setContext } from "@apollo/client/link/context";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "x-consumer-id": "test",
    },
  };
});

// Cache implementation
const cache = new InMemoryCache();
const defaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  },
  query: {
    fetchPolicy: "network-only",
    errorPolicy: "all",
  },
  mutate: {
    errorPolicy: "all",
  },
};

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  defaultOptions,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export { apolloProvider, apolloClient };
