import { FlatList, StyleSheet } from "react-native";
import React from "react";
import Item from "./Item";

const List = ({ data }) => {
	return (
		<FlatList
			style={styles.container}
			data={data}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <Item item={item} />}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		height: "100%",
	},
});

export default List;
