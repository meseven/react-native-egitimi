import React from 'react';
import {ScrollView, Text, Image, StyleSheet} from 'react-native';

import Loading from '../../components/Loading';
import Label from '../../components/Label';
import Evolutions from '../../components/Evolutions';

import {useQuery} from '@apollo/react-hooks';
import {POKEMON_QUERY} from './queries';

const Detail = ({route}) => {
	const {id} = route.params;

	const {error, loading, data} = useQuery(POKEMON_QUERY, {
		variables: {
			id,
		},
	});

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Text>Error.</Text>;
	}

	const {name, image, types, weaknesses, evolutions} = data.pokemon;

	return (
		<ScrollView>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={{
					uri: image,
				}}
			/>
			<Text style={styles.name}>{name}</Text>

			<Label title="Types" data={types} />
			<Label title="Weaknesses" data={weaknesses} />
			<Evolutions data={evolutions} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		height: 200,
		marginVertical: 20,
	},
	name: {
		fontSize: 24,
		textAlign: 'center',
		marginVertical: 20,
	},
});

export default Detail;
