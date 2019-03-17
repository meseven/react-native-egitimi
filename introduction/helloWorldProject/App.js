import React, {Component} from 'react';
import { StyleSheet,SafeAreaView,View, Text } from 'react-native';

import FlatListExample from './src/components/FlatListExample';

import axios from 'axios';

export default class App extends Component {
	state = {
		name: '',
		surname: '',
		loading: true
	};

	componentDidMount() {
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
	}

	render() {
		const {name,surname,loading} = this.state;
		return (
			<SafeAreaView style={styles.container}>
				{/*<FlatListExample />*/}
				<View>
					{
						loading ? <Text>Loading...</Text> :
							<Text>{name} {surname}</Text>
					}

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
	}
});
