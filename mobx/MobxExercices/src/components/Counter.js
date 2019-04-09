import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {observer, inject} from 'mobx-react';

@inject('CounterStore','PersonStore')
@observer
export default class Counter extends Component {
	render() {
		const { CounterStore, PersonStore} = this.props;

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
				<Text style={{ textAlign:'center'}}>{PersonStore.fullName}</Text>
				<Button
					title={"change the name"}
					onPress={() => PersonStore.changeName()}
				/>
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
