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
							<Input
								returnKeyType={'next'}
								onSubmitEditing={() => this.refs['password']._root.focus()}
								placeholder="Username" />
						</Item>
						<Item last>
							<Input
								ref="password"
								returnKeyType={'next'}
								onSubmitEditing={() => this.refs['passwordConfirm']._root.focus()}
								secureTextEntry={true}
								placeholder="Password" />
						</Item>
						<Item last>
							<Input
								ref="passwordConfirm"
								returnKeyType={'go'}
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
