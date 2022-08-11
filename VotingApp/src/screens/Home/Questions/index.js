import { useSubscription } from "@apollo/client";
import React from "react";
import { Text } from "react-native";
import Loading from "../../../components/AddButton/Loading";
import List from "./List";
import { GET_QUESTIONS_SUBSCRIPTION } from "./queries";

function Questions() {
	const { loading, error, data } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Text>{JSON.stringify(error)}</Text>;
	}

	return <List data={data.questions} />;
}

export default Questions;
