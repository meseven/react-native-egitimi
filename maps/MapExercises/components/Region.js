import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from "react-native-maps";

export default class Region extends Component {
	state = {
		region: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		}
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				region: {
					...this.state.region,
					latitude: 38
				},
			});

		}, 2000)
	}


	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
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
