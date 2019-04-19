import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewMovie extends Component {
  render() {
    return (
      <View style={{ backgroundColor:'yellow', flex:1, justifyContent:'center', alignItems:'center' }}>
				<Text>new movie</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({});
