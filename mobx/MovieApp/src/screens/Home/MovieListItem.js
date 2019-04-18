import React from 'react';

import { ListItem, Text, Left, Right, Icon } from 'native-base';

const MovieListItem = ({ item }) => (
	<ListItem noIndent onPress={() => {}}>
		<Left>
			<Text>{item.key}</Text>
		</Left>
		<Right>
			<Icon name="arrow-forward" />
		</Right>
	</ListItem>
);

export default MovieListItem;

