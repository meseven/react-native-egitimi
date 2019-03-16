import React, {Component} from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';

import PlatformExample from './src/components/PlatformExample';

export default class App extends Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<PlatformExample />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
