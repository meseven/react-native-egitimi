import React from 'react';
import {Text} from 'react-native';

const MovieListItem = ({ item }) => (
	<Text>{item.key}</Text>
);

export default MovieListItem;

