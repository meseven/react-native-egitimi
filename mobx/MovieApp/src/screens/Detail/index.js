import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Detail extends Component {
	constructor(props) {
		super(props);
		this.item = props.navigation.getParam('item')
	}

	render() {
    return (
      <View>
				<Text>{this.item.title}</Text>
				<Text>{this.item.imdb_score}</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({});
