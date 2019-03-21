import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Contacts extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Contacts</Text>
				<Button
					title="go to detail"
					onPress={() => this.props.navigation.navigate('ContactDetail')}
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
