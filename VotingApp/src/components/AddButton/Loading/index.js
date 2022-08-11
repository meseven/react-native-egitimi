import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const Loading = () => {
	return (
		<View style={styles.container}>
			<LottieView
				autoPlay
				style={{
					width: 300,
					height: 300,
				}}
				source={require("./animations/loading.json")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default Loading;
