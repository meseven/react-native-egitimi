import React, {Component} from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';

export default class Tire extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	componentDidMount() {
		this.startAnimation()
	}

	startAnimation = () => {
		Animated.loop(
			Animated
				.timing(this.state.animation, {
					duration: 1000,
					toValue: 1,
					easing: Easing.linear
				})
		).start()
	};

	render() {
		const interpolation = this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '-360deg']
		});

		const animatedStyles = {
			transform: [{
				rotate: interpolation
			}]
		};

		return (
			<Animated.Image
				style={[styles.tire, animatedStyles]}
				source={require('../../assets/tire.png')}
				resizeMode="contain"
			/>
		);
	}
}

const styles = StyleSheet.create({
	tire: {
		width: 50,
		height: 50
	}
});
