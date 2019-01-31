import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class App extends Component {
	state = {
		name: ''
	};

	_onChangeText = text => {
		this.setState({
			name: text,
		});
	};

	render() {
		const {name} = this.state;

		return (
			<View style={styles.container}>
				<Text>{name}</Text>
				<TextInput
					autoCapitalize='none'
					keyboardType='numeric'
					value={name}
					placeholder='Bir isim girin...'
					onChangeText={this._onChangeText}
					style={styles.myInput} />
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
		alignItems: 'center',
		paddingHorizontal: 10
	},
	myInput: {
		width: '100%',
		height: 60,
		borderWidth: 2,
		borderColor: 'gray'
	}
});
