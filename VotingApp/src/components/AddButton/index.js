import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const AddButton = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Ionicons name="md-add-outline" size={30} />
		</TouchableOpacity>
	);
};

export default AddButton;
