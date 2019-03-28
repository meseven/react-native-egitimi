import React, { Component } from 'react';
import {Animated, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

export default class Spring extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback onPress={this.startAnimation}>
					<Animated.View style={[styles.myBox]}>
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
