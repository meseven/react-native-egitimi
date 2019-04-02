import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({ item }) => (
	<View>
		<Text>{item.key}</Text>
	</View>
)

const styles = StyleSheet.create({});
