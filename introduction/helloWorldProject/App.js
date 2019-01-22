import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from './src/components/Card';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Card />
				<Card />
				<Card />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
