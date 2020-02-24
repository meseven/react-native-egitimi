import React from 'react';
import {ScrollView, Text, Image, StyleSheet} from 'react-native';

import Loading from '../../components/Loading';

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

	const {name} = data.pokemon;

	return (
		<ScrollView>
			<Image
				style={styles.image}
				resizeMode="contain"
				source={{
					uri: `https://img.pokemondb.net/artwork/${name.toLowerCase()}.jpg`,
				}}
			/>
			<Text style={styles.name}>{name}</Text>
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
