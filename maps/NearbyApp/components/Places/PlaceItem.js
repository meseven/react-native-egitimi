import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default ({ item }) => (
	<View style={styles.itemContainer}>
		<Text>{item.key}</Text>
	</View>
)

const styles = StyleSheet.create({
	itemContainer: {
		width: Dimensions.get('window').width - 20,
		height: 180,
		padding: 10,
		backgroundColor:'#fff',
		borderWidth: 1,
		borderRadius: 5,
	}
});
