import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, {Marker} from "react-native-maps";

export default class Markers extends Component {
	state = {
		region: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		},
		marker: {
			latitude: 37.78825,
			longitude: -122.4324,
		}
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
					<Marker
						coordinate={this.state.marker}
						title={"Evim"}
						description={"Lorem ipsum"}
					/>
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
	}
});
