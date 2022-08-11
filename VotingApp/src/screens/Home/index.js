import { View } from "react-native";
import React from "react";
import { Button } from "native-base";
import { useEffect } from "react";
import client from "../../Apollo";
import { gql } from "@apollo/client";

const Home = () => {
	useEffect(() => {
		client
			.query({
				query: gql`
					query QuestionsQuery {
						questions {
							id
							text
						}
					}
				`,
			})
			.then((result) => console.log(result));
	}, []);

	return (
		<View>
			<Button m={10} shadow={2} onPress={() => console.log("hello world")}>
				Click me
			</Button>
		</View>
	);
};

export default Home;
