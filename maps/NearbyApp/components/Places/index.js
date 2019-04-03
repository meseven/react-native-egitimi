import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class Places extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[{key:'a'}, {key:'b'}, {key:'c'}]}
					renderItem={({ item }) => <Text>{item.key}</Text>}
					horizontal={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 200,
		padding: 10,
		backgroundColor: '#f1f1f1'
	}
});
