import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	KeyboardAvoidingView,
	TouchableOpacity
} from "react-native";
import LoginForm from "./LoginForm";

import FlatListExample from "../components/FlatListExample";

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>asd</Text>
				<FlatListExample />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF",
		paddingVertical: 80
	},
	headBackground: {
		position: "absolute",
		top: 0,
		left: 0,
		height: 250,
		width: "100%",
		backgroundColor: "#1572de"
	},
	logo: {
		textAlign: "center",
		fontSize: 40,
		fontWeight: "bold",
		color: "#f2f2f2"
	},
	logoDescription: {
		textAlign: "center",
		color: "#f2f2f2"
	},
	loginArea: {
		marginHorizontal: 40,
		marginVertical: 40,
		backgroundColor: "#fff",
		padding: 20,
		borderRadius: 5,

		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 2
		},
		elevation: 4
	},
	loginAreaTitle: {
		fontSize: 20,
		textAlign: "center"
	},
	loginAreaDescription: {
		fontSize: 11,
		color: "#7e868f",
		marginVertical: 10,
		textAlign: "center"
	},
	signUpArea: {
		alignItems: "center"
	},
	signUpDescription: {
		color: "#999"
	},
	signUpText: {
		color: "#666"
	}
});
