import React, {Component} from 'react';

import {Container, Header, Body, Title, Content, Input, Item, Text, Button} from 'native-base';

import {Formik} from 'formik';
import * as Yup from 'yup';

export default class App extends Component {

	_handleSubmit = values => {
		alert(JSON.stringify(values))
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
					initialValues={{email: ''}}
					onSubmit={this._handleSubmit}
					validationSchema={
						Yup.object().shape({
							email: Yup
								.string()
								.email('geçersiz format.')
								.required('bu alan zorunlu')
						})
					}
				>
					{({values, handleChange, handleSubmit, errors}) => (
						<Content style={{padding: 10}}>
							<Item error={!!errors.email}>
								<Input
									onChangeText={handleChange('email')}
									value={values.email}
									placeholder='e-mail'
									autoCapitalize={'none'}
								/>

								<Text style={{color: 'red'}}>{errors.email}</Text>
							</Item>

							<Button
								block
								onPress={handleSubmit}
								style={{marginTop: 10}}>
								<Text>join</Text>
							</Button>
						</Content>
					)}
				</Formik>
			</Container>
		);
	}
}
