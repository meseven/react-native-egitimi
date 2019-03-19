import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AboutModal extends Component {
  render() {
  	const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>
				<Text style={styles.title}>About Modal!</Text>
				<Button
					title="Close"
					onPress={() => { goBack() }} />
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: 'center',
		alignItems:'center'
	},
	title: {
		fontSize: 34
	}
});
