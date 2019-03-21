import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator} from 'react-native';
import axios from 'axios';

export default class ContactsList extends Component {
	state = {
		text: '',
		page: 1,
		contacts: [],
		allContacts: [],
		loading: true,
		refreshing: false
	};

	componentDidMount() {
		this.getContacts();
	}

	getContacts = async () => {
		this.setState({
			loading: true,
		});

		const { data: { results: contacts } } = await axios.get(`https://randomuser.me/api/?results=10&page=${this.state.page}`);
		const users = [...this.state.allContacts, ...contacts];

		if (this.state.refreshing) {
			users.reverse();
		}

		this.setState({
			contacts: users,
			allContacts: users,
			loading: false,
			refreshing: false
		});
	};

	loadMore = () => {
		if (!this.duringMomentum) {
			this.setState({
				page: this.state.page + 1,
			}, () => {
				this.getContacts();
			});
			this.duringMomentum = true;
		}
	};

	onRefresh = () => {
		this.setState({
			page: 1,
			refreshing: true
		}, () => {
			this.getContacts();
		});
	};

	gotoDetail = user => {
		this.props.navigation.navigate('ContactDetail', {
			user
		})
	};

	renderContactsItem = ({item, index}) => {
		return (
			<TouchableOpacity
				onPress={() => this.gotoDetail(item)}
				style={[styles.itemContainer, {backgroundColor: index % 2 === 1 ? '#fafafa' : ''}]}>
				<Image
					style={styles.avatar}
					source={{uri: item.picture.thumbnail}}/>
				<View style={styles.textContainer}>
					<Text style={styles.name}>{item.name.first} {item.name.last}</Text>
					<Text>{item.location.state}</Text>
				</View>
			</TouchableOpacity>
		)
	};

	searchFilter = text => {
		const newData = this.state.allContacts.filter(item => {
			const listItem = `${item.name.first.toLowerCase()} ${item.name.last.toLowerCase()} ${item.location.state.toLowerCase()}`;

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

	renderFooter = () => {
		if (!this.state.loading) return null;
		return(
			<View style={{
				paddingVertical: 20
			}}>
				<ActivityIndicator size="large" />
			</View>
		)
	};

	render() {
		return (
			<FlatList
				ListFooterComponent={this.renderFooter}
				ListHeaderComponent={this.renderHeader()}
				renderItem={this.renderContactsItem}
				keyExtractor={item => item.login.uuid}
				data={this.state.contacts}

				onEndReached={this.loadMore}
				onEndReachedThreshold={0}
				onMomentumScrollBegin={() => { this.duringMomentum = false }}

				refreshing={this.state.refreshing}
				onRefresh={this.onRefresh}
			/>
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
