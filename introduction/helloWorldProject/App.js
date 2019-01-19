import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, styles.box1]}>
          <Text>Box 1</Text>
        </View>
				<View style={[styles.box, styles.box2]}>
					<Text>Box 2</Text>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    paddingTop: 33
  },
  box: {
		width: 100,
		height: 100,
    borderWidth: 5,
    borderColor: '#ddd',
    marginBottom: 5
  },
  box1: {
    backgroundColor: 'aquamarine',
  },
  box2: {
    backgroundColor: 'purple',
  }
});
