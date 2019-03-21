import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Settings extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button
					title="Open Settings Modal"
					onPress={() => this.props.navigation.navigate('SettingsModal')}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
