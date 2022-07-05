import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Error = ({ message }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Error: {message}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: "#000",
		backgroundColor: "orange",
		padding: 10,
		fontSize: 18,
	},
});

export default Error;
