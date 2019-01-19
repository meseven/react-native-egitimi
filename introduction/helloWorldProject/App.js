import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.slideOne}></View>
				<View style={styles.slideTwo}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flex: 1
  },
	slideOne: {
		backgroundColor: '#607D8B',
		flex: 1 // 3:6
	},
	slideTwo: {
		backgroundColor: '#FF5722',
		flex: 1 // 3:6
	}
});
