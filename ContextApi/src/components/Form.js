import { View, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useUsers } from "../context/UsersContext";

const Form = () => {
	const [name, setName] = useState("");
	const { addUser } = useUsers();

	const handleSubmit = () => {
		if (!name) {
			return false;
		}

		addUser({ name });
		setName("");
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				returnKeyType="go"
				value={name}
				onChangeText={(text) => setName(text)}
				onEndEditing={handleSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	input: {
		borderWidth: 2,
		borderColor: "#999",
		width: "100%",
		height: 50,
		padding: 5,
		fontSize: 20,
	},
});

export default Form;
