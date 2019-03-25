import React, {Component} from 'react';
import {StyleSheet, Image, View, Button, ActivityIndicator, Text} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import axios from 'axios';

const options = {
	title: 'Select Avatar',
	customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
	storageOptions: {
		skipBackup: true,
		path: 'images',
	},
	allowsEditing: true
};

export default class App extends Component<Props> {

	state = {
		avatarSource: null,
		loading: false,
		error: null
	};

	onSelectPicture = () => {
		ImagePicker.showImagePicker(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			} else {
				this.uploadPhoto(response);
			}
		});
	};

	uploadPhoto = async response => {
		this.setState({
			avatarSource: null,
			loading: true
		});


		const data = new FormData();
		data.append('fileData', {
			uri: response.uri,
			type: response.type,
			name: response.fileName
		});

		const config = {
			headers: {
				'Accept': 'application/json',
				'Content-type': 'multipart/form-data'
			}
		};


		try{
			const request = await axios.post('http://localhost:3001/upload', data, config);

			const source = {uri: response.uri};

			this.setState({
				avatarSource: source,
				loading: false,
				error: false
			});
		}catch (e) {
			this.setState({
				loading: false,
				error: true
			});
		}
	};

	render() {
		const {avatarSource, loading, error} = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.avatarContainer}>
					{
						avatarSource && <Image
							source={this.state.avatarSource}
							style={{width: 200, height: 200}}/>
					}
					{
						loading && <ActivityIndicator size={"small"} />
					}
					{
						error && <Text>Error.</Text>
					}
				</View>
				<Button
					title={"Select Picture"}
					onPress={this.onSelectPicture}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	avatarContainer: {
		marginBottom: 10,
		width: 200,
		height: 200,
		borderWidth: 2,
		borderStyle: 'dashed',
		borderColor: '#ddd',
		borderRadius: 5,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
