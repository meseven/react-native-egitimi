import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Body, Button, Container, Content, Form, Header, Input, Item, Title, Text} from "native-base";

export default class SignUp extends Component {
	render() {
		return (
			<Container>
				<Header>
					<Body>
						<Title>Sign Up</Title>
					</Body>
				</Header>
				<Content>
					<Form>
						<Item>
							<Input placeholder="Username" />
						</Item>
						<Item last>
							<Input
								secureTextEntry={true}
								placeholder="Password" />
						</Item>
						<Item last>
							<Input
								secureTextEntry={true}
								placeholder="Password confirm" />
						</Item>
					</Form>
					<Button full style={{ margin: 10 }}>
						<Text>Sign Up</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({});
