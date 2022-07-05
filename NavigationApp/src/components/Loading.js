import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Loading = ({ text }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		width: "100%",
		backgroundColor: "bisque",
	},
	text: {
		fontSize: 24,
		textAlign: "center",
	},
});

export default Loading;
