import React, { useState } from "react";
import { StyleSheet, View, Button, Text, SafeAreaView } from "react-native";
import Counter from "./src/components/Counter";

const App = () => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<SafeAreaView style={styles.container}>
			{isVisible && <Counter />}

			<Button title="Göster/Gizle" onPress={() => setIsVisible(!isVisible)} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default App;
