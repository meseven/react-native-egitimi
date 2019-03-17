import React, {Component} from 'react';
import { StyleSheet,SafeAreaView,View, Text, Button } from 'react-native';

import FlatListExample from './src/components/FlatListExample';

import axios from 'axios';

export default class App extends Component {
	state = {
		name: '',
		surname: '',
		loading: true
	};

	componentDidMount() {
		this.getRandomUser();
	}

	getRandomUser = () => {
		this.setState({
			loading: true,
		});

		axios
			.get('https://randomuser.me/api/')
			.then(user => user.data.results[0])
			.then(user => {
				this.setState({
					name: user.name.first,
					surname: user.name.last,
					loading: false
				});
			})
	};

	render() {
		const {name,surname,loading} = this.state;
		return (
			<SafeAreaView style={styles.container}>
				{/*<FlatListExample />*/}
				<View>
					{
						loading ? <Text style={styles.text}>Loading...</Text> :
							<Text style={styles.text}>{name} {surname}</Text>
					}
					<Button
						title={"Random User"}
						onPress={this.getRandomUser} />
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		textAlign: 'center'
	}
});
