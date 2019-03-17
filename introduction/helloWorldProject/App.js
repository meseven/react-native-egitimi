import React, {Component} from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';

import FlatListExample from './src/components/FlatListExample';

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<FlatListExample />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
