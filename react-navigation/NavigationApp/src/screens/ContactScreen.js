import React, { Component } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default class ContactScreen extends Component {
  render() {
		const { goBack } = this.props.navigation;

		return (
      <View style={styles.container}>
				<Text>Contact screen</Text>
				<Button
					title="go back"
					onPress={() => goBack(null)}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
