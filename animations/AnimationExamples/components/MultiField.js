import React, { Component } from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class MultiField extends Component {
	state = {
		animationWidth: new Animated.Value(200),
		animationHeight: new Animated.Value(200)
	};

	startAnimation = () => {
		Animated
			.timing(this.state.animationWidth, {
				duration: 300,
				toValue: 350
			})
			.start()


		Animated
			.timing(this.state.animationHeight, {
				duration:500,
				toValue: 350
			})
			.start()
	};

	render() {
		const animatedStyles= {
			width: this.state.animationWidth,
			height: this.state.animationHeight
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
		// width: 200,
		// height: 200,
		backgroundColor: '#FFC107',
		justifyContent:'center',
		alignItems:'center'
	}
});
