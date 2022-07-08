import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState, useMemo, useCallback } from "react";
import Header from "./Header";
import User from "./User";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Mehmet");

	const user = useMemo(() => {
		return {
			id: 1,
			name,
		};
	}, [name]);

	console.log("Counter component re-render");

	const increment = useCallback((amount) => {
		setCount((prev) => prev + amount);
	}, []);

	// const increment = (amount) => setCount(count + amount);

	return (
		<View style={styles.container}>
			<Header increment={increment} />

			<Text style={styles.text}>{count}</Text>
			<Button title="Arttır" onPress={() => increment(1)} />
			<Button title="İsmi Değiştir" onPress={() => setName("Ahmet")} />

			<User user={user} />
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
