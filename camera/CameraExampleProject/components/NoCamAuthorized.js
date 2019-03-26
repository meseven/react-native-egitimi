import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PermissionStatusText from './PermissionStatusText';

export default class NoCamAuthorized extends Component {
  render() {
  	const {camera, microphone} = this.props.permissions;
    return (
      <SafeAreaView style={styles.container}>
				<PermissionStatusText
					text={"Kamera"}
					permission={camera}
				/>

				<PermissionStatusText
					text={"Mikrofon"}
					permission={microphone}
				/>
			</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
