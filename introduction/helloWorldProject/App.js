import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';

export default class App extends Component {
	onPressDetail = () => {
		alert('Detail');
	};

	render() {
		return (
			<View style={styles.container}>
				<Button
					title='Detail'
					color='#000'
					onPress={this.onPressDetail}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
