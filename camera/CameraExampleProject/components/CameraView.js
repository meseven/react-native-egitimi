import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, CameraRoll, Platform} from 'react-native';

import {RNCamera} from 'react-native-camera';
import Permissions from 'react-native-permissions'

export default class CameraView extends Component {
	state = {
		permissions: {
			camera: null,
			microphone: null,
			photo: null
		}
	};

	componentDidMount() {
		this.checkPermissions();
	}

	checkPermissions = async () => {
		try {
			const permissions = await Permissions.checkMultiple(['camera', 'microphone', 'photo']);
			this.setState({
				permissions: {
					...permissions
				},
			});
			console.log(this.state);
		} catch (e) {
			console.warn(e);
		}
	};

	requestWriteExternalStoragePermission = async () => {
		try {
			const photoPermission = await Permissions.request('photo');
			console.log(photoPermission);
		} catch (e) {
			console.warn(e);
		}
	};

	takePhoto = async () => {
		if (this.camera) {

			const options = {
				quality: 0.7,
				base64: true
			};

			if (Platform.OS === 'android' && Platform.Version > 22) {
				await this.requestWriteExternalStoragePermission();
			}

			const data = await this.camera.takePictureAsync(options);


			try {
				const save = await CameraRoll.saveToCameraRoll(data.uri, 'photo');
				alert('success');
			} catch (e) {
				alert('err')
				console.log(e);
			}
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					style={styles.preview}
				/>
				<View style={styles.bottomController}>
					<TouchableOpacity
						onPress={this.takePhoto}
						style={styles.snapButton}>
						<Text style={styles.snapText}>SNAP</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#000'
	},
	preview: {
		flex: 1
	},
	bottomController: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	snapButton: {
		backgroundColor: '#fff',
		flex: 1,
		borderRadius: 6,
		padding: 15,
		margin: 15,
	},
	snapText: {
		color: '#000',
		textAlign: 'center'
	}
});
