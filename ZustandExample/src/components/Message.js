import { View, Text, StyleSheet } from "react-native";
import React from "react";
import PropTypes from "prop-types";

const Message = ({ bgColor, message }) => {
	return (
		<View style={[styles.container, { backgroundColor: bgColor }]}>
			<Text style={styles.text}>{message}</Text>
		</View>
	);
};

Message.propTypes = {
	bgColor: PropTypes.string,
	message: PropTypes.string,
};

Message.defaultProps = {
	bgColor: "orange",
};

const styles = StyleSheet.create({
	container: {
		padding: 12,
		borderWidth: 1,
		borderColor: "#000",
		margin: 10,
	},
	text: {
		fontSize: 18,
	},
});

export default Message;
