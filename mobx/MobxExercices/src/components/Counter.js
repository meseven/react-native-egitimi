import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Counter extends Component {
  render() {
    return (
      <View>
				<Text style={styles.text}>0</Text>
				<View style={styles.buttonContainer}>
					<Button
						title={"decrement"}
					/>
					<Button
						title={"increment"}
					/>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	text: {
		fontSize: 38,
		textAlign: 'center'
	},
	buttonContainer: {
		flexDirection: 'row'
	}
});
