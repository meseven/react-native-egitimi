import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {observer} from 'mobx-react';
import CounterStore from '../store/CounterStore';

@observer
export default class Counter extends Component {
  render() {
    return (
      <View>
				<Text style={styles.text}>{CounterStore.count}</Text>
				<View style={styles.buttonContainer}>
					<Button
						title={"decrement"}
						onPress={() => CounterStore.decrement()}
					/>
					<Button
						title={"increment"}
						onPress={() => CounterStore.increment()}
					/>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	text: {
		fontSize: 38,
		textAlign: 'center'
	},
	buttonContainer: {
		flexDirection: 'row'
	}
});
