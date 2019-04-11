import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {Formik} from "formik";
import {Button, Input, Item, Text} from "native-base";

// validations
import validations from './validations';

export default class SignInForm extends Component {
  render() {
    return (
      <React.Fragment>
				<Formik
					initialValues={{ username:'', password:'' }}
					validationSchema={validations}
				>
					{({
						values,
						handleChange,
						errors,
						touched,
						setFieldTouched,
						isValid
					}) => (
						<React.Fragment>
							<Item>
								<Input
									returnKeyType={'next'}
									onSubmitEditing={() => this.refs['password']._root.focus()}
									autoCapitalize={"none"}
									autoCorrect={false}
									value={values.username}
									onChangeText={handleChange('username')}
									onBlur={() => setFieldTouched('username')}
									placeholder="Username"/>
								{ (errors.username && touched.username) && <Text style={styles.error}>{errors.username}</Text> }
							</Item>
							<Item>
								<Input
									ref="password"
									secureTextEntry={true}
									returnKeyType={'go'}
									value={values.password}
									onChangeText={handleChange('password')}
									onBlur={() => setFieldTouched('password')}
									placeholder="Password"/>
								{ (errors.password && touched.password) && <Text style={styles.error}>{errors.password}</Text> }
							</Item>
							<Button
								block
								disabled={!isValid}
								style={{marginTop: 10}}>
								<Text>Sign In</Text>
							</Button>
						</React.Fragment>
					)}
				</Formik>
			</React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
	error:{ 
		color: 'red'
	}
});
