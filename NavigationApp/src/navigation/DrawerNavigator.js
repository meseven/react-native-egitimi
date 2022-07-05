import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { UsersStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen name="Home" component={TabNavigator} />
			<Drawer.Screen name="Users" component={UsersStackNavigator} />
		</Drawer.Navigator>
	);
};

export default DrawerNavigator;
