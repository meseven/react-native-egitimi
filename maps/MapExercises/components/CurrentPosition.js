import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from "react-native-maps";

import Permissions from 'react-native-permissions';

export default class CurrentPosition extends Component {
	state = {
		region: {
			latitude: 41.0087,
			longitude: 29.0173,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
	};

	componentDidMount() {
		Permissions.request('location').then(response => {

		})
	}


	render() {
		return (
			<View style={styles.container}>
				<MapView
					loadingEnabled={true}
					showsUserLocation={true}
					style={styles.map}
					region={this.state.region}
				>
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
