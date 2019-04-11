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
							errors
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
									placeholder="Username"/>
								<Text style={styles.error}>{errors.username}</Text>
							</Item>
							<Item>
								<Input
									ref="password"
									secureTextEntry={true}
									returnKeyType={'go'}
									value={values.password}
									onChangeText={handleChange('password')}
									placeholder="Password"/>
								<Text style={styles.error}>{errors.password}</Text>
							</Item>
						</React.Fragment>
					)}
				</Formik>

				<Button block style={{marginTop: 10}}>
					<Text>Sign In</Text>
				</Button>
			</React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
	error:{ 
		color: 'red'
	}
});
