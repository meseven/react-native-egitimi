import React, {Component} from 'react';

import { Container, Header, Body, Title, Content, Input, Item, Text, Button } from 'native-base';

import {Formik} from 'formik';

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
					initialValues={{ email: '' }}
					onSubmit={this._handleSubmit}
				>
					{({ values, handleChange, handleSubmit }) => (
						<Content style={{ padding: 10 }}>
							<Item>
								<Input
									onChangeText={handleChange('email')}
									value={values.email}
									placeholder='e-mail'
									autoCapitalize={'none'}
								/>
							</Item>

							<Button
								block
								onPress={handleSubmit}
								style={{ marginTop: 10 }}>
								<Text>join</Text>
							</Button>
						</Content>
					)}
				</Formik>
			</Container>
    );
  }
}
