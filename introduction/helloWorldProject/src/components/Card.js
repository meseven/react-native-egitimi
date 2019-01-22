import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Card extends Component {
	render() {
		return (
			<View style={styles.cardContainer}>
				<Text style={styles.cardText}>Merhaba!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	cardContainer: {
		padding: 10,
		borderWidth: 2,
		borderColor: '#000'
	},
	cardText: {
		fontSize: 18
	}
});
