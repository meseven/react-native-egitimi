import React, { Component } from 'react';
import { StyleSheet, Animated, View, Image } from 'react-native';

export default class Windmill extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Animated.Image
					style={styles.windmillSpinner}
					source={require('../../assets/spinner.png')}
					resizeMode="contain"
				/>
				<Image
					style={styles.windmillBottom}
					source={require('../../assets/windmill-bottom.png')}
					resizeMode="contain"
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		position:'relative',
	},
	windmillSpinner:{
		width: 130,
		height: 140,
		position: 'absolute',
		left: 45,
		top: 90,
		zIndex: 2
	},
	windmillBottom: {
		width: 220,
		height: 220,
		position: 'absolute',
		top: 165,
		zIndex: 1
	}
});
