import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Item = ({ item }) => {
	return (
		<TouchableOpacity style={styles.item}>
			<Text style={styles.text}>{item.text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		borderBottomWidth: 1,
		borderColor: "#DDD",
		padding: 10,
	},
	text: {
		fontSize: 18,
	},
});

export default Item;
