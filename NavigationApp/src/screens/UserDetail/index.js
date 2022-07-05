import React, { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from "axios";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const UserDetail = ({ route, navigation }) => {
	const { id } = route.params;

	const [userId, setUserId] = useState(id);
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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

	useEffect(() => {
		getData();
	}, [userId]);

	const getData = async () => {
		try {
			const { data } = await axios(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			);
			setUser(data);
		} catch (err) {
			setError(err.message);
		}

		setLoading(false);
	};

	if (loading) {
		return <Loading text="Loading User..." />;
	}

	if (error) {
		return <Error message={error} />;
	}

	return (
		<View>
			<Text style={styles.text}>{JSON.stringify(user, null, 2)}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 20,
	},
});

export default UserDetail;
