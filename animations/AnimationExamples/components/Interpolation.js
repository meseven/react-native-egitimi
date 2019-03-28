import React, { Component } from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class Interpolation extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	startAnimation = () => {
		Animated
			.timing(this.state.animation, {
				duration: 500,
				toValue: 1
			})
			.start()
	};

	render() {
		const boxInterpolate = this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['red', 'black']
		});

		const textInterpolate = this.state.animation.interpolate({
			inputRange: [0, 1],
			outputRange: ['black', 'white']
		});

		const boxAnimationStyles = {
			backgroundColor: boxInterpolate
		};

		const textAnimationStyles = {
			color: textInterpolate
		};

		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.startAnimation}>
					<Animated.View style={[styles.myBox, boxAnimationStyles]}>
						<Animated.Text style={textAnimationStyles}>React Native</Animated.Text>
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
