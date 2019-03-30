import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
				<MapView
          style={styles.map}
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
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
