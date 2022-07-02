import { StyleSheet, View } from "react-native";
import Title from "./src/components/Title";
import User from "./src/components/User";
import Users from "./src/components/Users";

const App = () => {
	return (
		<View style={styles.container}>
			<Title text={"React Native"} color="green" number={1} isVisible={true} />

			{/* <User data={{ id: 1, name: "Mehmet" }} /> */}
			{/* <Users data={["Ahmet", "Mehmet", "Ayşe", "Fatma"]} /> */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default App;
