// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
// 	uri: "https://votingapp.hasura.app/v1/graphql",
// 	cache: new InMemoryCache(),
// });

// export default client;

import { split, HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
	uri: "https://votingapp.hasura.app/v1/graphql",
});

const wsLink = new GraphQLWsLink(
	createClient({
		url: "wss://votingapp.hasura.app/v1/graphql",
	})
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

export default client;
