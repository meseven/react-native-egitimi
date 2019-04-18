import React from 'react';
import {Text} from 'react-native';

const ListItem = ({item}) => (
	<Text>{item.key}</Text>
);

export default ListItem;
