import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Places extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Text>selam</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 250,
		backgroundColor: '#f1f1f1'
	}
});
