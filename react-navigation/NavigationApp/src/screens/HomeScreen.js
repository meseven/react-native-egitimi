import React,{Component} from "react";
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from "react-native";

class TitleLogo extends Component{
	render(){
		return(
			<Image
				style={{ width: 38, height: 38}}
				source={require('../assets/header-icon.png')} />
		)
	}
}

export default class HomeScreen extends Component {
	static navigationOptions = {
		headerTitle: <TitleLogo />,
		headerRight: (
			<TouchableOpacity style={{ marginRight: 10 }} onPress={() => alert('button right')}>
				<Text style={{ color: "#333" }}>Right</Text>
			</TouchableOpacity>
		),
		headerLeft: (
			<TouchableOpacity style={{ marginLeft: 10 }} onPress={() => alert('button left')}>
				<Text style={{ color: "#333" }}>Left</Text>
			</TouchableOpacity>
		)
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
