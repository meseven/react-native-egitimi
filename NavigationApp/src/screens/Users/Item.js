import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("UserDetail", item)}>
				<Text style={styles.text}>{item.name}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: "#D8D8D8",
		borderBottomWidth: 1,
	},
	text: {
		fontSize: 24,
	},
});

export default Item;
