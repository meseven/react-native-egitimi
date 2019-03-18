import React,{Component} from "react";
import {StyleSheet, Text, View, Button} from "react-native";

export default class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Home',
		headerTransparent: true
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Home</Text>
				<Button
					title="Haber 1"
					onPress={() => navigate('Detail', {
						title: 'Kadıköyde Yangın'
					})}
				/>
				<Button
					title="Haber 2"
					onPress={() => navigate('Detail', {
						title: 'Fenerbahçe Namağlup'
					})}
				/>
				<Button
					title="Haber 3"
					onPress={() => navigate('Detail')}
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
