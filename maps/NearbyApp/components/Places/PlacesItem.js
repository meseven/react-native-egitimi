import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {API_KEY, API_ENDPOINT} from '../../constants';

export default class PlacesItem extends Component {
	onPress = () => {
		const { lat, lng } = this.props.item.geometry.location;

		const newRegion = {
			latitude: lat,
			longitude: lng,
			latitudeDelta: 0.002,
			longitudeDelta: 0.002,
		};

		this.props.map.animateToRegion(newRegion, 1000)
	};

	render() {
		const {photos} = this.props.item;

		let source;
		if (photos) {
			source = {uri: `${API_ENDPOINT}/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&key=${API_KEY}`}
		} else {
			source = require('../../assets/no-image.jpg')
		}

		return (
			<TouchableOpacity
				onPress={this.onPress}
			>
				<View style={styles.itemContainer}>
					<Text
						numberOfLines={1}
						style={styles.text}>{this.props.item.name}</Text>

					<Image
						style={styles.photo}
						source={source}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	itemContainer: {
		width: 240,
		height: 120,
		backgroundColor: '#fff',
	},
	text: {
		padding: 5,
		backgroundColor: '#fff',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 2
	},
	photo: {
		width: '100%',
		height: 120,
		position: 'absolute',
		left: 0,
		top: 0
	}
});
