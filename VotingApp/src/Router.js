import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// pages
import Home from "./screens/Home";
import AddButton from "./components/AddButton";

const Stack = createNativeStackNavigator();

function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;
