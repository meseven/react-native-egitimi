import React, {Component} from 'react';

import { Container, Header, Body, Title, Content, Input, Item, Text, Button } from 'native-base';

export default class App extends Component {
  render() {
    return (
			<Container>
				<Header>
					<Body>
            <Title>Signup</Title>
					</Body>
				</Header>
				<Content style={{ padding: 10 }}>
					<Item>
						<Input placeholder='e-mail' />
					</Item>

					<Button block style={{ marginTop: 10 }}>
						<Text>Primary</Text>
					</Button>
				</Content>
			</Container>
    );
  }
}
