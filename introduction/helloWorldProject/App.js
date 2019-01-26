import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={{ width: '100%', height: 220 }}
					source={{ uri: 'https://img2.10bestmedia.com/Images/Photos/239467/Looking-West-on-Beale-Street-SXN6oCYp2wAPsTW-KI2D-cr18q0ABlZBh-rgb-l_54_990x660_201404242159.jpg' }} />
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
