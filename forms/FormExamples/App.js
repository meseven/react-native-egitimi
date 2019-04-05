import React, {Component} from 'react';

import {Container, Header, Body, Title, Content, Input, Item, Text, Button, Spinner} from 'native-base';

import {Formik} from 'formik';
import * as Yup from 'yup';

const api = user => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (user.email === 'hi@hi.com') {
			  reject({ email: 'email already use.' })
			}

			resolve();
		}, 2000)
	})
};

export default class App extends Component {

	_handleSubmit = async (values, bag) => {
		try {
			await api(values);
			bag.setSubmitting(false);
			alert('welcome')
		}catch (e) {
			bag.setSubmitting(false);
			bag.setErrors(e)
		}
	};

	render() {
		return (
			<Container>
				<Header>
					<Body>
					<Title>Signup</Title>
					</Body>
				</Header>
				<Formik
					initialValues={{email: '', password: '', passwordConfirm: ''}}
					onSubmit={this._handleSubmit}
					validationSchema={
						Yup.object().shape({
							email: Yup
								.string()
								.email()
								.required(),
							password: Yup
								.string()
								.min(6)
								.required(),
							passwordConfirm: Yup
								.string()
								.oneOf([Yup.ref('password')], 'Passwords not matched.')
								.required()
						})
					}
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
							<Item error={errors.email && touched.email}>
								<Input
									onChangeText={handleChange('email')}
									value={values.email}
									placeholder='e-mail'
									onBlur={() => setFieldTouched('email')}
									autoCapitalize={'none'}
									keyboardType={'email-address'}
								/>

								{ (errors.email && touched.email) && <Text style={{color: 'red'}}>{errors.email}</Text>}
							</Item>

							<Item error={errors.password && touched.password}>
								<Input
									onChangeText={handleChange('password')}
									value={values.password}
									placeholder='password'
									onBlur={() => setFieldTouched('password')}
									autoCapitalize={'none'}
									secureTextEntry={true}
								/>

								{ (errors.password && touched.password) && <Text style={{color: 'red'}}>{errors.password}</Text>}
							</Item>

							<Item error={errors.passwordConfirm && touched.passwordConfirm}>
								<Input
									onChangeText={handleChange('passwordConfirm')}
									value={values.passwordConfirm}
									placeholder='password confirmation'
									onBlur={() => setFieldTouched('passwordConfirm')}
									autoCapitalize={'none'}
									secureTextEntry={true}
								/>

								{ (errors.passwordConfirm && touched.passwordConfirm) && <Text style={{color: 'red'}}>{errors.passwordConfirm}</Text>}
							</Item>

							<Button
								block
								disabled={!isValid || isSubmitting}
								onPress={handleSubmit}
								style={{marginTop: 10}}>

								{ isSubmitting && <Spinner size={'small'} color={'white'} /> }
								<Text>join</Text>
							</Button>
						</Content>
					)}
				</Formik>
			</Container>
		);
	}
}
