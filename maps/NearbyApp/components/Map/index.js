import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';

import {API_ENDPOINT,API_KEY} from '../../constants';

import MapView from 'react-native-maps';

export default class Map extends Component {
	state = {
		region: {
			latitude: 41.0087,
			longitude: 29.0173,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
		places: []
	};

	async componentDidMount() {
		try{
			const { coords: { latitude, longitude } } = await this.getCurrentPosition();

			const { data: { results } } = await axios.get(`${API_ENDPOINT}location=${latitude},${longitude}&radius=5000&type=restaurant&key=${API_KEY}`)
			this.setState({
				places: results,
			});
		}catch (e) {
			alert('Konum alınamadı!')
		}
	}

	getCurrentPosition(){
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				position => resolve(position), // success
				() => reject(), // fail
				{
					timeout: 5000,
					maximumAge: 1000,
					enableHighAccuracy: false
				}
			)
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					showsUserLocation={true}
					region={this.state.region}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	map: {
		flex: 1
	}
});
