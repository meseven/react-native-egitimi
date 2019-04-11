import React, { Component } from 'react';
import { StyleSheet} from 'react-native';

import { Container, Header, Content, Item, Input, Body, Title, Button, Text } from 'native-base';

import {Formik} from 'formik';

export default class SignIn extends Component {
  render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Sign In</Title>
					</Body>
				</Header>
				<Content style={{ padding: 10 }}>
					<Formik
						initialValues={{ username:'', password:'' }}
					>
						{({
							values,
							handleChange
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
								</Item>
								<Item>
									<Input
										ref="password"
										secureTextEntry={true}
										returnKeyType={'go'}
										value={values.password}
										onChangeText={handleChange('password')}
										placeholder="Password"/>
								</Item>
							</React.Fragment>
						)}
					</Formik>

					<Button block style={{marginTop: 10}}>
						<Text>Sign In</Text>
					</Button>
				</Content>
			</Container>
		);
  }
}

const styles = StyleSheet.create({});
