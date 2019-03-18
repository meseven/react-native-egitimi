import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
			<AppContainer />
    );
  }
}

class HomeScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Home</Text>
			</View>
		);
	}
}

class DetailScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Detail</Text>
			</View>
		);
	}
}

const AppNavigator = createStackNavigator({
	Home: HomeScreen,
	Detail: DetailScreen
}, {
	initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
