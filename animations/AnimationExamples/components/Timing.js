import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native';

export default class Timing extends Component {
	state = {
		animation: new Animated.Value(1)
	};

	startAnimation = () => {
		Animated
			.timing(this.state.animation, {
				toValue: 0,
				duration: 1000
			})
			.start(() => {
				Animated
					.timing(this.state.animation, {
						toValue: 1,
						duration: 100
					})
					.start()
			})
	};

	render() {

		this.state.animation.addListener(({value}) => console.log(value));

		const animatedStyles = {
			opacity: this.state.animation
		};

		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback
					onPress={this.startAnimation}
				>
					<Animated.View
						style={[styles.myBox, animatedStyles ]}
					>
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
