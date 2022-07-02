import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const User = ({ data }) => {
	return (
		<View>
			<Text>{JSON.stringify(data, null, 2)}</Text>
		</View>
	);
};

User.propTypes = {
	data: PropTypes.exact({
		id: PropTypes.number,
		name: PropTypes.string,
	}),
};

export default User;
