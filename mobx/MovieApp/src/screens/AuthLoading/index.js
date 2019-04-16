import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {inject} from 'mobx-react';

@inject('AuthStore')
export default class AuthLoading extends Component {
	async componentDidMount() {
		await this.props.AuthStore.setupAuth();
	}

	render() {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
				<Text>Loading...</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({});
