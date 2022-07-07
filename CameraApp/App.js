import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

let camera;
function App() {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(CameraType.back);
	const [zoomLevel, setZoomLevel] = useState(0);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === "granted");
		})();
	}, []);

	const handleCapture = async () => {
		if (camera) {
			const options = { quality: 0.7 };
			const data = await camera.takePictureAsync(options);

			await MediaLibrary.saveToLibraryAsync(data.uri);
		}
	};

	const handleZoom = (type) => {
		setZoomLevel((prev) =>
			type === "+"
				? prev === 100
					? 100
					: prev + 10
				: prev === 0
				? 0
				: prev - 10
		);
	};

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={styles.container}>
			<Camera
				style={styles.camera}
				type={type}
				zoom={zoomLevel / 100}
				ref={(ref) => {
					camera = ref;
				}}
			>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => {
							setType(
								type === CameraType.back ? CameraType.front : CameraType.back
							);
						}}
					>
						<Text style={styles.text}> Flip </Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={handleCapture}>
						<Text style={styles.text}>Take Photo</Text>
					</TouchableOpacity>

					<View style={styles.zoomContainer}>
						<TouchableOpacity
							style={styles.zoom}
							onPress={() => handleZoom("-")}
							disabled={zoomLevel / 1000 === 0}
						>
							<Text style={styles.zoomText}>-</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.zoom}
							onPress={() => handleZoom("+")}
							disabled={zoomLevel / 100 === 1}
						>
							<Text style={styles.zoomText}>+</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Camera>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	camera: {
		flex: 1,
		justifyContent: "flex-end",
	},
	buttonContainer: {
		backgroundColor: "#999",
		flexDirection: "row",
		marginVertical: 20,
		alignItems: "center",
		justifyContent: "space-around",
	},
	text: {
		fontSize: 22,
		color: "#000",
	},
	zoomContainer: {
		flexDirection: "row",
	},
	zoom: {
		width: 40,
		height: 40,
		backgroundColor: "#DDD",
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 4,
	},
	zoomText: {
		fontSize: 26,
	},
});

export default App;
