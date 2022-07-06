import { View, Text, Button } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Settings = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Active Theme: {theme}</Text>
			<Button title="Toggle Theme" onPress={toggleTheme} />
		</View>
	);
};

export default Settings;
