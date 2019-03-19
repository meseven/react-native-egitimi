import React, {Component} from "react";
import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default class DetailScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('title', 'Detail'),
			headerStyle: {
				backgroundColor: 'yellow'
			},
			headerRight: (
				<TouchableOpacity style={{ marginRight: 10 }} onPress={() => alert('button right')}>
					<Text style={{ color: "#333" }}>Right</Text>
				</TouchableOpacity>
			)
		}
	};

	render() {
		const { navigate, push, goBack, getParam } = this.props.navigation;
		const title = getParam('title', 'Default Title');

		return (
			<View style={styles.container}>
				<Text>{title}</Text>
				<Button
					title="go to home page"
					onPress={() => navigate('Home')}
				/>

				<Button
					title="go back"
					onPress={() => goBack()}
				/>
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
	}
});
