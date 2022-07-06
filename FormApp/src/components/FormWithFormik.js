import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

const FormWithFormik = () => {
	const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
		useFormik({
			initialValues: {
				username: "",
				email: "",
				password: "",
				passwordConfirm: "",
			},
			onSubmit: (values) => {
				console.log(values);
			},
			validationSchema,
		});

	return (
		<View style={styles.container}>
			<View style={styles.item}>
				<TextInput
					style={styles.input}
					placeholder="username"
					value={values.username}
					onChangeText={handleChange("username")}
					onBlur={handleBlur("username")}
				/>
				{errors.username && touched.username && (
					<Text style={styles.error}>{errors.username}</Text>
				)}
			</View>

			<View style={styles.item}>
				<TextInput
					style={styles.input}
					autoCapitalize="none"
					keyboardType="email-address"
					placeholder="e-mail"
					value={values.email}
					onChangeText={handleChange("email")}
					onBlur={handleBlur("email")}
				/>
				{errors.email && touched.email && (
					<Text style={styles.error}>{errors.email}</Text>
				)}
			</View>

			<View style={styles.item}>
				<TextInput
					style={styles.input}
					placeholder="password"
					secureTextEntry
					value={values.password}
					onChangeText={handleChange("password")}
					onBlur={handleBlur("password")}
				/>
				{errors.password && touched.password && (
					<Text style={styles.error}>{errors.password}</Text>
				)}
			</View>

			<View style={styles.item}>
				<TextInput
					style={styles.input}
					placeholder="password confirm"
					secureTextEntry
					value={values.passwordConfirm}
					onChangeText={handleChange("passwordConfirm")}
					onBlur={handleBlur("passwordConfirm")}
				/>
				{errors.passwordConfirm && touched.passwordConfirm && (
					<Text style={styles.error}>{errors.passwordConfirm}</Text>
				)}
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
	error: {
		color: "red",
	},
});

export default FormWithFormik;
