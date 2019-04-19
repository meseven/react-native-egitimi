import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import {Icon} from 'native-base';
import NavigationService from '../NavigationService';

export default class NewButton extends Component {
  render() {
    return (
      <TouchableOpacity
				onPress={() => NavigationService.navigate('NewMovie')}
				style={styles.buttonContainer}>
				<Icon name={"add"} style={{ color: 'red' }} />
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	buttonContainer: {
		padding: 10
	},
	text: {
		fontSize: 14
	}
});
