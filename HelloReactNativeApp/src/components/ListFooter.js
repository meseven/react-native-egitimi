import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListFooter = () => {
	return (
		<View style={styles.footer}>
			<Text>Footer</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	footer: {
		padding: 20,
		backgroundColor: "yellow",
	},
});

export default ListFooter;
