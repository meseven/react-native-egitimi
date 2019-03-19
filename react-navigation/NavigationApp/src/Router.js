import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const AppNavigator = createStackNavigator({
	Home: HomeScreen,
	Detail: DetailScreen
}, {
	initialRouteName: "Home",
	headerLayoutPreset: "center",
	defaultNavigationOptions: {
		headerBackTitle: null,
		headerTintColor: '#000',
		headerTitleStyle: {
			fontWeight: 'bold',
		}
	},
});

export default createAppContainer(AppNavigator);
