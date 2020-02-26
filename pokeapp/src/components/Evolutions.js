import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const Evolutions = ({data}) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Evolutions</Text>

			{!data && <Text>The last stage of its evolution.</Text>}

			{data &&
				data.map(item => (
					<TouchableOpacity
						key={item.id}
						style={styles.listItem}
						onPress={() => {
							navigation.push('Detail', {
								id: item.id,
								name: item.name,
							});
						}}>
						<Image
							style={styles.image}
							resizeMode="contain"
							source={{uri: item.image}}
						/>
						<Text style={styles.name}>{item.name}</Text>
					</TouchableOpacity>
				))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	title: {
		fontSize: 20,
	},
	listItem: {
		flex: 1,
		flexDirection: 'row',
		height: 80,
		alignItems: 'center',
	},
	image: {
		height: 60,
		width: 60,
		marginRight: 15,
	},
	name: {
		fontSize: 18,
	},
});

export default Evolutions;
