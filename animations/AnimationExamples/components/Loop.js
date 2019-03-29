import React, {Component} from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class Delay extends Component {
	state = {
		topValue: new Animated.Value(0)
	};

	startAnimation = () => {
		Animated.loop(
			Animated.sequence([
				Animated
					.timing(this.state.topValue, {
						duration: 1000,
						toValue: 300
					}),
				Animated
					.timing(this.state.topValue, {
						duration: 1000,
						toValue: 0
					}),
			])
		).start()
	};

	render() {
		const animatedStyles = {
			top: this.state.topValue
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
	myBox: {
		position: 'absolute',
		left:0,
		top: 0,
		width: 200,
		height: 200,
		backgroundColor: '#FFC107',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
