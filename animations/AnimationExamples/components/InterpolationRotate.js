import React, { Component } from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class InterpolationRotate extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	startAnimation = () => {
		Animated
			.timing(this.state.animation, {
				duration: 1000,
				toValue: 360
			})
			.start()
	};

	render() {
		const interpolation = this.state.animation.interpolate({
			inputRange: [0, 360],
			outputRange: ['0deg', '1080deg']
		});

		const animatedStyles = {
			transform: [{
				rotate: interpolation
			}]
		};

		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.startAnimation}>
					<Animated.View style={[styles.myBox, animatedStyles]}>
						<Text>React Native</Text>
					</Animated.View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	myBox: {
		width: 200,
		height: 200,
		backgroundColor: '#FFC107',
		justifyContent:'center',
		alignItems:'center'
	}
});
