import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import HomeScreen from "./src/screens/Home";
import UsersScreen from "./src/screens/Users";
import UserDetail from "./src/screens/UserDetail";
import HeaderLogo from "./src/components/HeaderLogo";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerStyle: {
						backgroundColor: "#EEE",
					},
					headerTintColor: "#000",
					headerTitleStyle: {
						fontWeight: "bold",
					},
				}}
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						title: "Anasayfa",
						headerTitle: (props) => <HeaderLogo {...props} />,
					}}
				/>
				<Stack.Screen
					name="Users"
					component={UsersScreen}
					options={{
						title: "Kullanıcılar",
					}}
				/>
				<Stack.Screen
					name="UserDetail"
					component={UserDetail}
					options={({ route }) => ({ title: route.params.name })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
