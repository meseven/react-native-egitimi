import React, {Component} from 'react';
import {StyleSheet, View, Text, SafeAreaView, FlatList, Image, TouchableOpacity, TextInput} from 'react-native';

import data from '../../data';

export default class FlatListExample extends Component {
	state = {
		text: '',
		contacts: data
	};

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

	searchFilter = text => {
		const newData = data.filter(item => {
			const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()}`;

			return listItem.indexOf(text.toLowerCase()) > -1;
		});

		this.setState({
			contacts: newData,
		});
	};

	renderHeader = () => {
		const {text} = this.state;
		return (
			<View style={styles.searchContainer}>
				<TextInput
					onChangeText={text => {
						this.setState({
							text,
						});

						this.searchFilter(text);
					}}
					value={text}
					placeholder="Search..."
					style={styles.searchInput}/>
			</View>
		)
	};

	render() {
		return (
			<FlatList
				ListHeaderComponent={this.renderHeader()}
				renderItem={this.renderContactsItem}
				keyExtractor={item => item._id}
				data={this.state.contacts}/>
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
