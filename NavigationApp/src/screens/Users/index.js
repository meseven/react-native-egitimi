import React from "react";
import { View, FlatList } from "react-native";
import Item from "./Item";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";

const UsersScreen = () => {
	const { data, loading, error } = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);

	if (loading) {
		return <Loading text="Loading..." />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Item id={item.id} name={item.name} />}
			/>
		</View>
	);
};

export default UsersScreen;
