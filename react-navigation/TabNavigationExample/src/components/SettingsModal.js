import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SettingsModal extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Text style={styles.text}>Settings Modal</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F44336'
	},
	text: {
		color: '#f1f1f1',
		fontSize: 32
	}
});
