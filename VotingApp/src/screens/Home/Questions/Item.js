import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => navigation.navigate("Detail", { id: item.id })}
		>
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
