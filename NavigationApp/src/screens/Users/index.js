import { View, Text, Button, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import Loading from "../../components/Loading";

const UsersScreen = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<View style={{ flex: 1 }}>
			{loading ? (
				<Loading text="Loading..." />
			) : (
				<FlatList
					data={users}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <Item id={item.id} name={item.name} />}
				/>
			)}
		</View>
	);
};

export default UsersScreen;
