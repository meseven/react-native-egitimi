import React from 'react';

import {
	createBottomTabNavigator,
	createAppContainer
} from "react-navigation";

// auth stack
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const AuthStack = createBottomTabNavigator(
	{
		SignIn: {
			screen: SignIn
		},
		SignUp: {
			screen: SignUp
		}
	},
	{
		initialRouteName: 'SignIn',
		tabBarOptions: {
			activeTintColor: '#fff',
			inactiveTintColor: '#586589',
			style: {
				backgroundColor: '#171f33'
			}
		}
	}
);

export default createAppContainer(AuthStack);
