import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Pokemons from '../src/screens/Pokemons/Pokemons';

const HomeStack = createStackNavigator();

export default (
	<NavigationContainer>
		<HomeStack.Navigator>
			<HomeStack.Screen name="Pokemons" component={Pokemons} />
		</HomeStack.Navigator>
	</NavigationContainer>
);
