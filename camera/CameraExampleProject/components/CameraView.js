import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {RNCamera} from 'react-native-camera';

export default class CameraView extends Component {
	takePhoto = async () => {
		if (this.camera) {
		  const options = {
		  	quality: 0.7,
				base64: true
			};

			const data = await this.camera.takePictureAsync(options);

		  console.log(data);
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
	bottomController: {
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
