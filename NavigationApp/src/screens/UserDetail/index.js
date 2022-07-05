import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetch from "../../hooks/useFetch";

const UserDetail = ({ route, navigation }) => {
	const { id } = route.params;
	const [userId, setUserId] = useState(id);

	const { data, loading, error } = useFetch(
		`https://jsonplaceholder.typicode.com/users/${userId}`
	);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<Button
					onPress={() => setUserId((id) => (id + 1 === 11 ? 1 : id + 1))}
					title="Next"
				/>
			),
		});
	}, [navigation]);

	if (loading) {
		return <Loading text="Loading User..." />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<View>
			<Text style={styles.text}>{JSON.stringify(data, null, 2)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
	},
});

export default UserDetail;
