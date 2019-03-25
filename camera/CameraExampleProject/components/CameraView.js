import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {RNCamera} from 'react-native-camera';

export default class CameraView extends Component {
  render() {
    return (
      <View style={styles.container}>
				<RNCamera
					style={styles.preview}
				/>
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
	}
});
