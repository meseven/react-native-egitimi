import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';

export default class App extends Component {
	state = {
		name: 'Mehmet'
	};

	onPressChangeName = () => {
		this.setState({
			name: 'Ahmet',
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text>{this.state.name}</Text>
				</View>
				<Button
					title='Change the Name'
					color='#000'
					onPress={this.onPressChangeName}
				/>
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
