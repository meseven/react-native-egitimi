import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, CameraRoll, Platform, ScrollView, Image} from 'react-native';

import {RNCamera} from 'react-native-camera';
import Permissions from 'react-native-permissions';

import NoCamAuthorized from './NoCamAuthorized';

export default class CameraView extends Component {
	state = {
		permissions: {
			camera: null,
			microphone: null,
			photo: null
		},
		counter: 0,
		photos: []
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
			this.setState({
				permissions: {
					photo: photoPermission
				},
			});
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
				this.setState({
					counter: this.state.counter + 1,
					photos: [{ uri: data.uri}, ...this.state.photos]
				});
			} catch (e) {
				alert('err')
				console.log(e);
			}
		}
	};

	render() {
		const {permissions} = this.state;
		return (
			<View style={styles.container}>
				<RNCamera
					ref={ref => {
						this.camera = ref;
					}}
					type={RNCamera.Constants.Type.back}
					flashMode={RNCamera.Constants.FlashMode.on}
					notAuthorizedView={<NoCamAuthorized permissions={permissions} />}
					style={styles.preview}
				/>
				<View style={styles.bottomController}>
					<View style={{alignItems: 'center'}}>
						<TouchableOpacity
							onPress={this.takePhoto}
							disabled={permissions.camera !== 'authorized' ? true : false}
							style={styles.snapButton}>
							<Text style={styles.snapText}>SNAP</Text>
						</TouchableOpacity>
					</View>
					<View style={{flexDirection: 'row'}}>
						{
							this.state.photos.length > 0 &&
							<View style={{flex:5,padding: 15}}>
								<ScrollView
									horizontal={true}
									style={{ flexDirection: 'row', flex:1, height:40 }}
								>
									{
										this.state.photos.map(item => (
											<Image
												source={{ uri: item.uri }}
												style={styles.photo}
											/>
										))
									}
								</ScrollView>
							</View>
						}
						<View style={{flex:1, padding: 15, alignItems:'flex-end'}}>
							<View style={{ backgroundColor:'white', width:40, padding:5, borderRadius: 3 }}>
								<Text style={{ textAlign: 'center', fontSize: 24 }}>
									{this.state.counter}
								</Text>
							</View>
						</View>
					</View>
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
		position: 'absolute',
		left: 0,
		bottom:0,
		alignItems: 'center',
		width: '100%'
	},
	snapButton: {
		backgroundColor: '#fff',
		width: 80,
		borderRadius: 6,
		padding: 15,
		margin: 15,
	},
	snapText: {
		color: '#000',
		textAlign: 'center'
	},
	photo:{
		height:40,
		width:40,
		marginRight: 2
	}
});
