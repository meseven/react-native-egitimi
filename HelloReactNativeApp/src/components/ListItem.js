import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const ListItem = ({ item }) => {
	return (
		<View style={styles.item}>
			<TouchableOpacity>
				<Text style={styles.title}>{item.title}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default ListItem;
