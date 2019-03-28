import React, { Component } from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class Spring extends Component {
	state = {
		animation: new Animated.Value(1)
	};

	startAnimation = () => {
		Animated
			.spring(this.state.animation, {
				duration: 200,
				toValue: 2,
			})
			.start()
	};

	render() {
		const animatedStyles = {
			transform: [{
				scale: this.state.animation
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
		width: 100,
		height: 100,
		backgroundColor: '#FFC107',
		justifyContent:'center',
		alignItems:'center'
	}
});
