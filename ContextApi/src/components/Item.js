import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Item = ({ user }) => {
	return (
		<View style={styles.item}>
			<TouchableOpacity onPress={() => {}}>
				<Text style={styles.text}>{user.name}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		padding: 10,
		backgroundColor: "#D8D8D8",
		borderBottomWidth: 1,
		borderBottomColor: "#999",
	},
	text: {
		fontSize: 18,
	},
});

export default Item;
