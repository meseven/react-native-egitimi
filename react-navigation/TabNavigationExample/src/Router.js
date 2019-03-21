import React from 'react';
import { Text, View} from 'react-native';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// screens
import Home from './screens/Home';
import Contacts from './screens/Contacts';
import Settings from './screens/Settings';


const TabNavigator = createBottomTabNavigator({
	Home: {
		screen: Home
	},
	Contacts: {
		screen: Contacts
	},
	Settings: {
		screen: Settings
	}
});

export default createAppContainer(TabNavigator);
