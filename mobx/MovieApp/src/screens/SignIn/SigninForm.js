import React, { Component } from 'react';

import {Button, Content, Input, Item, Spinner, Text} from "native-base";
import {Formik} from "formik";

import {API_BASE} from '../../constants';
import validations from './validations';


import axios from 'axios';
import {inject} from 'mobx-react';

@inject('AuthStore')
export default class SigninForm extends Component {
	_handleSubmit = async ({ username, password }, bag) => {
		try {
			const { data } = await axios.post(`${API_BASE}/authenticate`, { username, password });
			bag.setSubmitting(false);

			if (!data.status) {
			  alert(data.message);
				return false;
			}

			this.props.AuthStore.saveToken(data.token);
		}catch (e) {
			bag.setSubmitting(false);
			bag.setErrors(e)
		}
	};

	render() {
		return (
			<Formik
				initialValues={{
					username: '',
					password: ''
				}}
				onSubmit={this._handleSubmit}
				validationSchema={validations}
			>
				{({
						values,
						handleChange,
						handleSubmit,
						errors,
						touched,
						setFieldTouched,
						isValid,
						isSubmitting
					}) => (
					<Content style={{padding: 10}}>
						<Item error={errors.username && touched.username}>
							<Input
								returnKeyType={'next'}
								onSubmitEditing={() => this.passwordRef._root.focus()}
								onChangeText={handleChange('username')}
								value={values.username}
								placeholder='username'
								onBlur={() => setFieldTouched('username')}
								autoCorrect={false}
								autoCapitalize={'none'}
							/>

							{ (errors.username && touched.username) && <Text style={{color: 'red'}}>{errors.username}</Text>}
						</Item>

						<Item error={errors.password && touched.password}>
							<Input
								ref={ref => this.passwordRef = ref}
								returnKeyType={'go'}
								onChangeText={handleChange('password')}
								value={values.password}
								placeholder='password'
								onBlur={() => setFieldTouched('password')}
								autoCapitalize={'none'}
								secureTextEntry={true}
							/>

							{ (errors.password && touched.password) && <Text style={{color: 'red'}}>{errors.password}</Text>}
						</Item>

						<Button
							block
							disabled={!isValid || isSubmitting}
							onPress={handleSubmit}
							style={{marginTop: 10}}>

							{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
							<Text>login</Text>
						</Button>
					</Content>
				)}
			</Formik>
		);
	}
}
