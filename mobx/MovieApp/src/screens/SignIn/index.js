import React, { Component } from 'react';
import { StyleSheet} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Body, Title, Button, Text } from 'native-base';

export default class SignIn extends Component {
  render() {
    return (
			<Container>
				<Header>
					<Body>
						<Title>Sign In</Title>
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
								secureTextEntry={true}
								returnKeyType={'go'}
								placeholder="Password" />
						</Item>
					</Form>
					<Button full style={{ margin: 10 }}>
						<Text>Sign In</Text>
					</Button>
				</Content>
			</Container>
    );
  }
}

const styles = StyleSheet.create({});
