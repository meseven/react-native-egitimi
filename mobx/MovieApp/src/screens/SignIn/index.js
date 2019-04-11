import React, { Component } from 'react';
import { StyleSheet} from 'react-native';

import { Container, Header, Content, Body, Title } from 'native-base';

// signin form
import SignInForm from './SignInForm';

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
					<SignInForm />
				</Content>
			</Container>
		);
  }
}

const styles = StyleSheet.create({});
