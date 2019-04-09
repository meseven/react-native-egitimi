import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {observer,inject} from 'mobx-react';

@inject("UserStore")
@observer
export default class Users extends Component {
  render() {
  	const {UserStore} = this.props;
    return (
      <View>
				<Button
					title={"fetch users"}
					onPress={() => UserStore.fetchUsers()}
				/>

				<View>
					{
						UserStore.users.map((user, key) => (
							<View key={key}>
								<Text>{ user.name.first }</Text>
							</View>
						))
					}
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({});
