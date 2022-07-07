import { View, Text } from "react-native";
import React from "react";

const Error = ({ message }) => {
	return (
		<View>
			<Text>Error: {message}</Text>
		</View>
	);
};

export default Error;
