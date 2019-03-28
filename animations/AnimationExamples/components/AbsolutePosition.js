import React, { Component } from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class AbsolutePosition extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	startAnimation = () => {
		Animated
			.timing(this.state.animation, {
				duration: 500,
				toValue: 30
			})
			.start()
	}

	render() {
		const animatedStyles = {
			left: this.state.animation,
			right: this.state.animation,
			bottom: this.state.animation
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
		height: 200,
		backgroundColor: '#FFC107',
		justifyContent:'center',
		alignItems:'center',
		position: 'absolute',
		bottom: 0,
		left: 0,
		right:0
	}
});
