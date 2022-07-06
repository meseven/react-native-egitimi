import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { useFormik } from "formik";

const FormWithFormik = () => {
	const { values, handleSubmit, handleChange } = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
			passwordConfirm: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.item}>
				<TextInput
					style={styles.input}
					placeholder="username"
					value={values.username}
					onChangeText={handleChange("username")}
				/>
			</View>

			<View style={styles.item}>
				<TextInput
					style={styles.input}
					autoCapitalize="none"
					keyboardType="email-address"
					placeholder="e-mail"
					value={values.email}
					onChangeText={handleChange("email")}
				/>
			</View>

			<View style={styles.item}>
				<TextInput
					style={styles.input}
					placeholder="password"
					secureTextEntry
					value={values.password}
					onChangeText={handleChange("password")}
				/>
			</View>

			<View style={styles.item}>
				<TextInput
					style={styles.input}
					placeholder="password confirm"
					secureTextEntry
					value={values.passwordConfirm}
					onChangeText={handleChange("passwordConfirm")}
				/>
			</View>

			<View style={styles.item}>
				<Button title="Register" onPress={handleSubmit} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 20,
	},
	item: {
		marginBottom: 4,
	},
	input: {
		borderWidth: 1,
		borderColor: "#999",
		padding: 10,
		fontSize: 24,
		width: "100%",
	},
});

export default FormWithFormik;
