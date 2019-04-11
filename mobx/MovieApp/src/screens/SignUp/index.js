import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Body, Button, Container, Content, Header, Input, Item, Title, Text} from "native-base";

import SignUpForm from './SignUpForm';

export default class SignUp extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Sign Up</Title>
					</Body>
				</Header>
				<Content style={{ padding: 10 }}>
					<SignUpForm />
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({});
