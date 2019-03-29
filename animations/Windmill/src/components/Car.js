import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CarBody from './CarBody';
import Tire from './Tire';

export default class Car extends Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.car}>
					<CarBody />

					<View style={styles.tire1}>
						<Tire />
					</View>

					<View style={styles.tire2}>
						<Tire />
					</View>


				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	car:{ 
		position: 'relative',
		width: 200,
		height: 200
	},
	tire1: {
		position: 'absolute',
		left: 4,
		bottom: -14
	},
	tire2: {
		position: 'absolute',
		right: 23,
		bottom: -14
	}
});
