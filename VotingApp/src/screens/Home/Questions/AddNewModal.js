import { Box, Button, Heading, Input } from "native-base";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const AddNewModal = () => {
	return (
		<Box backgroundColor="#ddd" flex={"1"}>
			<Box p="6" flex={"1"}>
				<Heading mb="2">Question</Heading>
				<Input
					placeholder="Enter a new question..."
					fontSize={20}
					borderColor="#686565"
				/>

				<Heading mt="6" mb="2">
					Options
				</Heading>
				<Input
					placeholder="Enter a new question..."
					fontSize={18}
					borderColor="#686565"
					mb={1}
				/>
				<Input
					placeholder="Enter a new question..."
					fontSize={18}
					borderColor="#686565"
				/>

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
						leftIcon={<Ionicons name="add-circle" color={"#fff"} size={28} />}
					/>
				</Box>
			</Box>
			<Box>
				<Button size={"lg"}>Save</Button>
			</Box>
		</Box>
	);
};

export default AddNewModal;
