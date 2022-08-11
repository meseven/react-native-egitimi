import { Box, Button, Heading, Input, useToast } from "native-base";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { ADD_NEW_QUESTION_MUTATION } from "./queries";
import { useMutation } from "@apollo/client";

const AddNewModal = () => {
	const toast = useToast();
	const [addNewQuestion, { loading, error }] = useMutation(
		ADD_NEW_QUESTION_MUTATION
	);

	const [title, setTitle] = useState("");
	const [options, setOptions] = useState([{ text: "" }, { text: "" }]);

	const handleOptionChange = (val, i) => {
		const data = [...options];
		data[i].text = val;
		setOptions(data);
	};

	const handleNewOption = () => {
		if (options.length >= 5) {
			return;
		}

		setOptions((prev) => [...prev, { text: "" }]);
	};

	const handleSubmit = async () => {
		const options_data = options.filter((item) => item.text !== "");

		if (!title || options_data.length < 2) {
			return;
		}

		const result = await addNewQuestion({
			variables: {
				title,
				options: options_data,
			},
		});

		toast.show({
			title: "Question added!",
			placement: "top",
			status: "success",
		});

		console.log("result", result);
	};

	return (
		<Box backgroundColor="#ddd" flex={"1"}>
			<Box p="6" flex={"1"}>
				<Heading mb="2">Question</Heading>
				<Input
					placeholder="Enter a new question..."
					fontSize={20}
					borderColor="#686565"
					value={title}
					onChangeText={setTitle}
				/>

				<Heading mt="6" mb="2">
					Options
				</Heading>
				{options.map((item, i) => (
					<Input
						placeholder="Enter a new question..."
						fontSize={18}
						borderColor="#686565"
						mb={1}
						key={i}
						value={item.text}
						onChangeText={(val) => handleOptionChange(val, i)}
					/>
				))}

				<Box
					mt="2"
					alignItems={{
						base: "flex-end",
					}}
				>
					<Button
						colorScheme={"blueGray"}
						size="xs"
						alignItems={{
							base: "flex-end",
						}}
						disabled={options.length >= 5}
						onPress={handleNewOption}
						leftIcon={<Ionicons name="add-circle" color={"#fff"} size={28} />}
					/>
				</Box>
			</Box>
			<Box>
				<Button size={"lg"} onPress={handleSubmit} isLoading={loading}>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default AddNewModal;
