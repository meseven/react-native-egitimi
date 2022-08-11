import React, { useState } from "react";
import { Modal, View } from "react-native";
import AddButton from "../../components/AddButton";
import Questions from "./Questions";
import AddNewModal from "./Questions/AddNewModal";

const Home = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<AddButton onPress={() => setModalVisible((prev) => !prev)} />
			),
		});
	}, [navigation]);

	return (
		<View>
			<Questions />

			<Modal
				animationType="slide"
				visible={modalVisible}
				presentationStyle={"pageSheet"}
				onRequestClose={() => setModalVisible(false)}
			>
				<AddNewModal />
			</Modal>
		</View>
	);
};

export default Home;
