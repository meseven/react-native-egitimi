import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";

export default function App() {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({});
			setLocation(location.coords);
		})();

		setTimeout(() => {
			setLocation({
				latitude: 39.9032923,
				longitude: 32.6226813,
			});
		}, 2000);
	}, []);

	if (errorMsg) {
		return <Text>{errorMsg}</Text>;
	}

	return (
		<View style={styles.container}>
			{location && (
				<MapView
					style={styles.map}
					region={{
						latitude: location?.latitude,
						longitude: location?.longitude,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: "100%",
		height: "100%",
	},
});
