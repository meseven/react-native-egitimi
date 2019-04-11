import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Body, Button, Container, Content, Header, Input, Item, Title, Text} from "native-base";



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
					<Item>
						<Input
							returnKeyType={'next'}
							onSubmitEditing={() => this.refs['password']._root.focus()}
							autoCapitalize={"none"}
							autoCorrect={false}
							placeholder="Username"/>
					</Item>
					<Item>
						<Input
							ref="password"
							returnKeyType={'next'}
							onSubmitEditing={() => this.refs['passwordConfirm']._root.focus()}
							secureTextEntry={true}
							placeholder="Password"/>
					</Item>
					<Item>
						<Input
							ref="passwordConfirm"
							returnKeyType={'go'}
							secureTextEntry={true}
							placeholder="Password confirm"/>
					</Item>
					<Button block style={{marginTop: 10}}>
						<Text>Sign Up</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({});
