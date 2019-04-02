import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
	state = {
		region: {
			latitude: 41.0087,
			longitude: 29.0173,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		}
	};

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
