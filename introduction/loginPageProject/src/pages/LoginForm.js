import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Input from '../components/Input';

export default class LoginForm extends Component {
  render() {
    return (
      <View>
				<Text style={styles.signInText}>Sign In</Text>

				<Input
					autoCapitalize="none"
					placeholder="Username"/>

				<Input
					secureTextEntry={true}
					placeholder="Password"/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	signInText: {
		marginVertical: 10,
		fontSize: 14,
		color: '#333'
	}
});
