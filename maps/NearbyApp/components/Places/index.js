import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import PlaceItem from './PlaceItem';

export default class Places extends Component {
  render() {
    return (
      <View style={styles.container}>
				<FlatList
					data={[{key:'a'},{key:'b'}]}
					renderItem={({item}) => <PlaceItem item={item} />}
					horizontal={true}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 200,
		padding: 10
	}
});
