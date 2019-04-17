import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class LogoutButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
				<Text style={styles.text}>Logout</Text>
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
		padding: 10
	},
	text: {
		fontSize: 14
	}
});
