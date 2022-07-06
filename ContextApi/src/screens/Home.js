import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Form from "../components/Form";
import List from "../components/List";

const Home = () => {
	return (
		<View style={styles.container}>
			<Form />
			<List />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	text: {
		fontSize: 20,
	},
});

export default Home;
