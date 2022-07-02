import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const Users = ({ data }) => {
	return (
		<View>
			<Text>{JSON.stringify(data, null, 2)}</Text>
		</View>
	);
};

Users.propTypes = {
	data: PropTypes.array,
};

export default Users;
