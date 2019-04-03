import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class PlacesItem extends Component {
  render() {
    return (
      <View style={styles.itemContainer}>
				<Text>{this.props.item.name}</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	itemContainer: {
		width: 180,
		height: 120,
		backgroundColor: '#fff',
		padding: 10,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: '#ddd'
	}
});
