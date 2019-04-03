import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import PlacesItem from './PlacesItem';

export default class Places extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[{key:'a'}, {key:'b'}, {key:'c'}]}
					renderItem={({ item }) => <PlacesItem item={item} />}
					horizontal={true}
					ItemSeparatorComponent={() => <View style={{ marginRight: 10 }} />}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 140,
		padding: 10,
	}
});
