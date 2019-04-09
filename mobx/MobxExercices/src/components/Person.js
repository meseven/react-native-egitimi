import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

import {observer} from 'mobx-react';
import PersonStore from '../store/PersonStore';

@observer
export default class Person extends Component {
  render() {
    return (
      <View>
				<Text style={styles.text}>{PersonStore.fullName}</Text>
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
		textAlign: 'center'
	}
});
