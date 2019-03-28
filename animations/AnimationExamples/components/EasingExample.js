import React, {Component} from 'react';
import {Animated, StyleSheet, Easing, Dimensions, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class EasingExample extends Component {
	state = {
		animation: new Animated.Value(0)
	};

	startAnimation = () => {
		Animated
			.timing(this.state.animation, {
				duration: 1000,
				toValue: Dimensions.get('window').width - 200,
				// easing: Easing.bounce,
				easing: Easing.back(4),
				// easing: Easing.elastic(20),
			})
			.start(() => {
				Animated
					.timing(this.state.animation, {
						duration: 1000,
						toValue: 0,
						easing: Easing.elastic(3),
					})
					.start(() => {
						this.startAnimation()
					})
			});
	};

	render() {
		const animatedStyles = {
			transform: [{
				translateX: this.state.animation
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
		backgroundColor: '#F5FCFF',
	},
	myBox: {
		width: 200,
		height: 200,
		backgroundColor: '#FFC107',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
