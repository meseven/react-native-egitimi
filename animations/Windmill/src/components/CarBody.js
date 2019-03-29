import React, { Component } from 'react';
import { StyleSheet, Animated, View } from 'react-native';

export default class CarBody extends Component {
  render() {
    return (
      <Animated.Image
				resizeMode={"contain"}
				source={require('../../assets/car.png')}
				style={[styles.carBody]}
			/>
    );
  }
}

const styles = StyleSheet.create({
	carBody: {
		width: 200,
		height: 200,
		position: 'absolute',
		left: 0,
		top:0
	}
});
