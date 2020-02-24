import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Loading = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.loading}>Loading...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 20,
	},
	loading: {
		fontSize: 22,
	},
});

export default Loading;
