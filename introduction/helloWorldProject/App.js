import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image 
					style={{width: '100%', height: 180}}
					source={require('./src/assets/sweden.jpg')} />
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
	}
});
