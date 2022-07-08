import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Header = ({ increment }) => {
	console.log("Header component re-render");

	const arr = new Array(100000)
		.fill()
		.map(() => Math.floor(Math.random() * 10));

	return (
		<View style={styles.container}>
			<Text>Header</Text>
			<Text style={{ height: 100 }}>{JSON.stringify(arr)}</Text>
			<Button onPress={() => increment(5)} title="Arttır" />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 60,
		borderBottomWidth: 2,
		alignItems: "center",
		paddingBottom: 10,
	},
});

export default React.memo(Header);
