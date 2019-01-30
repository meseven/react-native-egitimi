import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
	_onPressButton = () => {
		alert('test');
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={{marginBottom: 40}}>
					<View style={styles.buttonContainer}>
						<Text style={styles.buttonTitle}>My Button</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={this._onPressButton}
				>
					<Image
						style={{width: 100, height: 100}}
						source={require('./src/assets/button.png')} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonTitle: {
		fontSize: 24
	},
	buttonContainer: {
		padding: 15,
		backgroundColor: 'orange',
		borderRadius: 15
	}
});
