import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import {inject} from 'mobx-react';

@inject('AuthStore')
export default class LogoutButton extends Component {
  render() {
    return (
      <TouchableOpacity
				onPress={() => this.props.AuthStore.removeToken()}
				style={styles.buttonContainer}>
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
