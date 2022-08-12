import { View, Text } from "react-native";
import React from "react";
import { Box, Heading, Image } from "native-base";
import emptyImage from "./empty.png";

const EmptyList = ({ message }) => {
	return (
		<Box
			w={"100%"}
			h={"100%"}
			backgroundColor="#FFF"
			justifyContent="center"
			alignItems={"center"}
		>
			<Image
				source={emptyImage}
				alt="empty image"
				h={300}
				resizeMode="contain"
				mb={4}
			/>

			<Heading size={"lg"} fontWeight="normal">
				{message}
			</Heading>
		</Box>
	);
};

export default EmptyList;
