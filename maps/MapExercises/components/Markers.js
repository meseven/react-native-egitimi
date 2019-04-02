import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, {Marker} from "react-native-maps";

import AnimatedMarker from './AnimatedMarker';

export default class Markers extends Component {
	state = {
		region: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
		markers: [
			{
				latlng: {
					latitude: 37.78825,
					longitude: -122.4324,
				},
				title: 'Evim',
				description: 'Lorem ipsum'
			},
			{
				latlng: {
					latitude: 37.76825,
					longitude: -122.4324,
				},
				title: 'İş yerim',
				description: 'Lorem ipsum 2'
			},
			{
				latlng: {
					latitude: 37.74825,
					longitude: -122.4324,
				},
				title: 'Annem',
				description: 'Lorem ipsum 3'
			}
		]
	};

	componentDidMount() {

	}

	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={this.state.region}
				>
					{
						this.state.markers.map((marker, key) => (
							<Marker
								key={key}
								coordinate={marker.latlng}
								title={marker.title}
								description={marker.description}
								//image={require('../assets/custom-marker.png')}
							>
								<AnimatedMarker />
							</Marker>
						))
					}
				</MapView>
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
	},
});
