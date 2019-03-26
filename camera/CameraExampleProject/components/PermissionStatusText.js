import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class PermissionStatusText extends Component {
	render() {
		const {permission, text} = this.props;
		return (
			<View>
				{
					permission !== 'authorized'
						?
							<Button
								title={`${text} erişimini etkinleştir.`}
								style={[styles.text, styles.button]}
							/>
						:
							<Text style={[styles.text, styles.activeText]}>
								✓ {text} erişimi etkin.
							</Text>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		padding: 10,
		fontWeight: '600'
	},
	textActive: {
		color: 'green'
	},
	button: {
		color: '#1283de'
	}
});
