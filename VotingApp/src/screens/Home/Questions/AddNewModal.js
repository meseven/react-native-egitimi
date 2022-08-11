import { Box, Button, Heading, Input, Text } from "native-base";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const AddNewModal = () => {
	const [question, setQuestion] = useState("");
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

	const handleSubmit = () => {
		console.log("question", question);
		console.log("options", options);
	};

	return (
		<Box backgroundColor="#ddd" flex={"1"}>
			<Box p="6" flex={"1"}>
				<Heading mb="2">Question</Heading>
				<Input
					placeholder="Enter a new question..."
					fontSize={20}
					borderColor="#686565"
					value={question}
					onChangeText={setQuestion}
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
				<Button size={"lg"} onPress={handleSubmit}>
					Save
				</Button>
			</Box>
		</Box>
	);
};

export default AddNewModal;
