import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ListHeader = () => {
	return (
		<View style={styles.header}>
			<Text>Header</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		padding: 20,
		backgroundColor: "bisque",
	},
});

export default ListHeader;
