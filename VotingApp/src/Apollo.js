import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://mighty-mudfish-47.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
});

export default client;
