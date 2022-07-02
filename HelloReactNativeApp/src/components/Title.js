import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const Title = ({ isVisible, text, color }) => {
	return (
		<View>
			{isVisible && (
				<Text style={[styles.title, { color: color }]}>{text}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 28,
		fontWeight: "700",
	},
});

Title.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	number: PropTypes.number,
	isVisible: PropTypes.bool,
};

Title.defaultProps = {
	text: "Varsayılan Başlık",
	color: "blue",
	isVisible: true,
};

export default Title;
