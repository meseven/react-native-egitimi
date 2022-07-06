import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Form from "../components/Form";
import List from "../components/List";
import { useUsers } from "../context/UsersContext";

const Home = () => {
	const { loadData } = useUsers();

	useEffect(() => {
		loadData();
	}, []);

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
