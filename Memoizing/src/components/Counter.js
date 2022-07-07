import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "./Header";

const Counter = () => {
	const [count, setCount] = useState(0);

	console.log("Counter component re-render");

	return (
		<View style={styles.container}>
			<Header count={count < 5 ? count : 5} />

			<Text style={styles.text}>{count}</Text>
			<Button title="Arttır" onPress={() => setCount(count + 1)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
	},
});

export default Counter;
