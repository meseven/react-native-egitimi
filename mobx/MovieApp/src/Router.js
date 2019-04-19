import React from 'react';

import {
	createBottomTabNavigator,
	createAppContainer,
	createSwitchNavigator,
	createStackNavigator
} from "react-navigation";

// native base
import { Icon } from 'native-base';

// auth loading
import AuthLoading from './screens/AuthLoading';

// app stack
import Home from './screens/Home';
import Detail from './screens/Detail';

// auth stack
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const AppStack = createStackNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: 'Home',
		}
	},
	Detail: {
		screen: Detail,
		navigationOptions: {
			title: 'Detail',
		}
	}
});
const AuthStack = createBottomTabNavigator(
	{
		SignIn: {
			screen: SignIn,
			navigationOptions: {
				title: 'Sign In',
				tabBarIcon: ({ tintColor }) => <Icon name="log-in" style={{ color: tintColor }} />
			}
		},
		SignUp: {
			screen: SignUp,
			navigationOptions: {
				title: 'Sign Up',
				tabBarIcon: ({ tintColor }) => <Icon name="person-add" style={{ color: tintColor }} />
			}
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

const SwitchNavigator = createSwitchNavigator(
	{
		AuthLoading: {
			screen: AuthLoading
		},
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'AuthLoading',
	}
);

export default createAppContainer(SwitchNavigator);
