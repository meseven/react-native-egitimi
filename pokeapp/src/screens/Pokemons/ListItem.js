import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const ListItem = ({item}) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() =>
				navigation.push('Detail', {
					id: item.id,
					name: item.name,
				})
			}>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={{
					uri: item.image,
				}}
			/>
			<Text style={styles.name}>{item.name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 10,
		borderBottomWidth: 1,
		borderColor: '#f1f1f1',
	},
	image: {
		width: 100,
		height: 100,
	},
	name: {
		fontSize: 24,
		marginLeft: 15,
	},
});

export default ListItem;
