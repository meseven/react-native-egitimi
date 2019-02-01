import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput} from 'react-native';

import data from '../../data';

export default class FlatListExample extends Component {
	renderContactsItem = ({item, index}) => {
		return (
			<TouchableOpacity style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? '#fafafa' : ''}]}>
				<Image
					style={styles.avatar}
					source={{uri: item.picture}}/>
				<View style={styles.textContainer}>
					<Text style={styles.name}>{item.name}</Text>
					<Text>{item.company}</Text>
				</View>
			</TouchableOpacity>
		)
	};

	renderHeader = () => {
		return (
			<View style={styles.searchContainer}>
				<TextInput placeholder="Search..." style={styles.searchInput}/>
			</View>
		)
	};

	render() {
		return (
			<FlatList
				ListHeaderComponent={this.renderHeader}
				renderItem={this.renderContactsItem}
				keyExtractor={item => item._id}
				data={data}/>
		);
	}
}


const styles = StyleSheet.create({
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginHorizontal: 10
	},
	textContainer: {
		justifyContent: 'space-around'
	},
	name: {
		fontSize: 16
	},
	searchContainer: {
		padding: 10
	},
	searchInput: {
		fontSize: 16,
		backgroundColor: '#f9f9f9',
		padding: 10
	}
});
