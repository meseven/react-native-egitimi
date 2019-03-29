import React, { Component } from 'react';
import { StyleSheet, Animated, View, Image, Easing } from 'react-native';

export default class Windmill extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	componentDidMount() {
		this.startAnimation()
	}

	startAnimation = () => {
		Animated.loop(
			Animated
				.timing(this.state.animation, {
					duration: 5000,
					toValue: 1,
					easing: Easing.linear
				})
		).start()
	};

  render() {
  	const interpolation = this.state.animation.interpolate({
			inputRange: [0,1],
			outputRange: ['0deg', '360deg']
		});

  	const animatedStyles = {
  		transform: [{
  			rotate: interpolation
			}]
		};

    return (
      <View style={[styles.container, { ...this.props.style }]}>
				<Animated.Image
					style={[styles.windmillSpinner, animatedStyles]}
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
