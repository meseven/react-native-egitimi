import { useQuery } from "@apollo/client";
import React from "react";
import { Text } from "react-native";
import { GET_QUESTIONS_QUERY } from "./queries";

function Questions() {
	const { loading, error, data } = useQuery(GET_QUESTIONS_QUERY);

	if (loading) {
		return <Text>Loading...</Text>;
	}

	if (error) {
		return <Text>{JSON.stringify(error)}</Text>;
	}

	return <Text>{JSON.stringify(data)}</Text>;
}

export default Questions;
