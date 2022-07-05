import { View, Text, Button } from "react-native";
import React from "react";

const UsersScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>UsersScreen</Text>
			<Button title="Anasayfa" onPress={() => navigation.navigate("Home")} />
			<Button title="Geri" onPress={() => navigation.goBack()} />
		</View>
	);
};

export default UsersScreen;
