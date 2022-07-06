import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Item from "./Item";
import { useUsers } from "../context/UsersContext";
import Message from "./Message";

const List = () => {
	const { users } = useUsers();

	return (
		<>
			{users.length === 0 && <Message message="No Item" />}

			<FlatList
				style={styles.list}
				data={users}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <Item user={item} />}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	list: {
		flex: 1,
	},
});

export default List;
