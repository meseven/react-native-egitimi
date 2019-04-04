import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { Container, Header, Content, Input, Item } from 'native-base';

export default class App extends Component {
  render() {
    return (
			<Container>
				<Header />
				<Content>
					<Item regular>
						<Input placeholder='Regular Textbox' />
					</Item>
				</Content>
			</Container>
    );
  }
}
