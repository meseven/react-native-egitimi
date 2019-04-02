import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
	state = {
		region: {
			latitude: 37.78825,
			longitude: -122.4324,
			latitudeDelta: 0.001,
			longitudeDelta: 0.001,
		}
	};

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
