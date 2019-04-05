import React, {Component} from 'react';

import {Container} from 'native-base';
import Signup from './src/components/Signup';

export default class App extends Component {
	render() {
		return (
			<Container>
				<Signup />
			</Container>
		);
	}
}
