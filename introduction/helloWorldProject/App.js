import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.title}>1</Text>
					<View>
						<Text>hi!</Text>
					</View>
					<Text style={styles.title}>2</Text>
					<Text style={styles.title}>3</Text>
					<Text style={styles.title}>4</Text>
					<Text style={styles.title}>5</Text>
					<Text style={styles.title}>6</Text>
					<Text style={styles.title}>7</Text>
					<Text style={styles.title}>8</Text>
					<Text style={styles.title}>9</Text>
					<Text style={styles.title}>10</Text>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flex: 1,
		flexDirection: 'row',
	},
	title: {
		backgroundColor: 'orange',
		marginVertical: 30,
		textAlign: 'center',
		paddingVertical: 60
	}
});
