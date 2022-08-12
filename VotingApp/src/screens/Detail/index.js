import React from "react";
import { useQuery } from "@apollo/client";
import { GET_QUESTION_DETAIL } from "./queries";
import Loading from "../../components/AddButton/Loading";
import { Box, Heading } from "native-base";
import Form from "./Form";
import { useState } from "react";
import Results from "./Results";

const Detail = ({ route }) => {
	const { id } = route.params;
	const [isVoted, setIsVoted] = useState(false);

	const { loading, data } = useQuery(GET_QUESTION_DETAIL, {
		variables: {
			id,
		},
	});

	if (loading) {
		return <Loading />;
	}

	const { text, options } = data.questions_by_pk;

	return (
		<Box p="3">
			<Heading>{text}</Heading>
			{!isVoted ? (
				<Form options={options} setIsVoted={setIsVoted} />
			) : (
				<Results id={id} />
			)}
		</Box>
	);
};

export default Detail;
