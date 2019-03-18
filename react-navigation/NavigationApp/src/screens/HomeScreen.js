import React,{Component} from "react";
import {StyleSheet, Text, View, Button} from "react-native";

export default class HomeScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Home</Text>
				<Button
					title="Detail 1"
					onPress={() => navigate('Detail')}
				/>
				<Button
					title="Detail 2"
					onPress={() => navigate('Detail', {
						title: 'Detail 2'
					})}
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
