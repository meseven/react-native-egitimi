import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
	uri: "https://votingapp.hasura.app/v1/graphql",
	cache: new InMemoryCache(),
});

export default client;
