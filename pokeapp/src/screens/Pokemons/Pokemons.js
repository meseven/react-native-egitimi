import React from 'react';
import {Text, FlatList} from 'react-native';

import ListItem from './ListItem';
import Loading from '../../components/Loading';

import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const POKEMONS_QUERY = gql`
	{
		pokemons(first: 20) {
			id
			name
		}
	}
`;

const Pokemons = () => {
	const {error, loading, data} = useQuery(POKEMONS_QUERY);

	if (loading) {
		return <Loading />;
	}

	if (error) {
		return <Text>Error.</Text>;
	}

	return (
		<FlatList
			data={data.pokemons}
			renderItem={({item}) => <ListItem item={item} />}
			keyExtractor={item => item.id}
		/>
	);
};

export default Pokemons;
