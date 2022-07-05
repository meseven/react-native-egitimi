import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [amount, setAmount] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("setInterval");
			setCount((prev) => prev + 1); // setCount(1)
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		console.log("count veya amount state değişti.");
	}, [count, amount]);

	// useEffect(() => {
	// 	console.log("amount state değişti.");
	// }, [amount]);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Count: {count}</Text>
			<Button title="Arttır" onPress={() => setCount(count + amount)} />

			<Text style={styles.text}>Amount: {amount}</Text>
			<Button title="1" onPress={() => setAmount(1)} />
			<Button title="5" onPress={() => setAmount(5)} />
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
		fontSize: 36,
	},
});

export default Counter;
