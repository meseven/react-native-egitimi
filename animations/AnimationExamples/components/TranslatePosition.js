import React, { Component } from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class Timing extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	startAnimation = () => {
		Animated
			.timing(this.state.animation, {
				toValue: 200,
				duration: 300
			})
			.start()
	};

	render() {
		const animatedStyles = {
			transform: [
				{
					translateX: this.state.animation
				}
			]
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
