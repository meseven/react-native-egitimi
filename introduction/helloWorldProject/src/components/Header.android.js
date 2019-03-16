import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
	render() {
		return (
			<View style={styles.AndroidHeader}>
				<Text>Header</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	AndroidHeader: {
		backgroundColor: 'red',
		padding: 10
	}
});
