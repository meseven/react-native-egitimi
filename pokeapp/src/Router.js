import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import Pokemons from './screens/Pokemons/Pokemons';

const HomeStack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<HomeStack.Navigator>
				<HomeStack.Screen name="Pokemons" component={Pokemons} />
			</HomeStack.Navigator>
		</NavigationContainer>
	);
}
