import React from "react";
import { Radio, Box, Button } from "native-base";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { NEW_ANSWER_MUTATION } from "./queries";

const Form = ({ options }) => {
	const [selected, setSelected] = useState("");

	const [newAnswer, { loading }] = useMutation(NEW_ANSWER_MUTATION);

	const handleSubmit = async () => {
		if (!selected) {
			return;
		}

		await newAnswer({
			variables: {
				option_id: selected,
			},
		});
	};

	return (
		<Box py={"3"}>
			<Radio.Group value={selected} onChange={setSelected}>
				{options.map((option) => (
					<Radio key={option.id} value={option.id} my={1}>
						{option.text}
					</Radio>
				))}
			</Radio.Group>

			<Button mt={5} onPress={handleSubmit} isLoading={loading}>
				Submit
			</Button>
		</Box>
	);
};

export default Form;
