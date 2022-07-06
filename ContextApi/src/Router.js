import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Settings from "./screens/Settings";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const Router = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Settings" component={Settings} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Router;
