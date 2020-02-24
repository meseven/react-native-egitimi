import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const POKEMONS_QUERY = gql`
	{
		pokemons(first: 10) {
			id
			name
		}
	}
`;

const Pokemons = () => {
	const {error, loading, data} = useQuery(POKEMONS_QUERY);

	if (loading) {
		return <Text>Loading...</Text>;
	}

	if (error) {
		return <Text>Error.</Text>;
	}

	console.log(data);

	return (
		<FlatList
			data={data.pokemons}
			renderItem={({item}) => <Text>{item.name}</Text>}
			keyExtractor={item => item.id}
		/>
	);
};

export default Pokemons;
