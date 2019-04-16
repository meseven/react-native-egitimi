import React, {Component} from 'react';
import {Body, Header, Title} from "native-base";

import SigninForm from './SigninForm';

import {observer, inject} from 'mobx-react';

@inject('AuthStore')
@observer
export default class Signup extends Component {
	render() {
		return (
			<React.Fragment>
				<Header>
					<Body>
						<Title>Signin</Title>
					</Body>
				</Header>
				<SigninForm />
			</React.Fragment>
		);
	}
}
