import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

import ContactScreen from './screens/ContactScreen';

// import AboutModal from './screens/AboutModal';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator({
	Home: {
		screen: HomeScreen
	},
	Detail: {
		screen: DetailScreen
	}
});

const ContactStack = createStackNavigator({
	Contact: {
		screen: ContactScreen
	}
});

const Drawer = createDrawerNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: {
			drawerLabel: 'Home',
			drawerIcon: ({ tintColor }) => (
				<Icon
					name="ios-home"
					size={22}
					color={tintColor}
				/>
			)
		}
	},
	Contact: {
		screen: ContactStack,
		navigationOptions: {
			drawerLockMode: 'locked-closed',
			drawerLabel: 'Contact',
			drawerIcon: ({ tintColor }) => (
				<Icon
					name="ios-contact"
					size={22}
					color={tintColor}
				/>
			),
		}
	}
}, {
	drawerPosition: 'right',
	drawerWidth: 160,
	contentOptions: {
		activeTintColor: '#e91e63',
		itemsContainerStyle: {
			opacity: 1
		},
		iconContainerStyle: {
			opacity: 1
		},
		itemStyle: {
			flexDirection: 'row-reverse'
		}
	}
});

export default createAppContainer(Drawer);
