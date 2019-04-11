import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {Formik} from "formik";
import {Button, Input, Item, Text} from "native-base";

// validations
import validations from './validations';

export default class SignUpForm extends Component {
  render() {
    return (
      <React.Fragment>
				<Formik
					initialValues={{ username:'', password:'', passwordConfirm: '' }}
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
									onSubmitEditing={() => this.refs['passwordConfirm']._root.focus()}
									placeholder="Password"/>
								{ (errors.password && touched.password) && <Text style={styles.error}>{errors.password}</Text> }
							</Item>
							<Item>
								<Input
									ref="passwordConfirm"
									secureTextEntry={true}
									returnKeyType={'go'}
									value={values.passwordConfirm}
									onChangeText={handleChange('passwordConfirm')}
									onBlur={() => setFieldTouched('passwordConfirm')}
									placeholder="Password confirm"/>
								{ (errors.passwordConfirm && touched.passwordConfirm) && <Text style={styles.error}>{errors.passwordConfirm}</Text> }
							</Item>
							<Button
								block
								disabled={!isValid}
								style={{marginTop: 10}}>
								<Text>Sign Up</Text>
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
