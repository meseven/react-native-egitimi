import React, {Component} from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';

import data from './data';

export default class App extends Component {
	renderContactsItem = ({ item, index }) => {
		return(
			<View>
				<Text>{item.name}</Text>
			</View>
		)
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<FlatList
					renderItem={this.renderContactsItem}
					keyExtractor={item => item._id}
					data={data} />
			</SafeAreaView>
		);
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
