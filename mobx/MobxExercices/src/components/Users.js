import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

import {observer,inject} from 'mobx-react';

@inject("UserStore")
@observer
export default class Users extends Component {
  render() {
  	const {UserStore} = this.props;
    return (
      <View>

				{
					UserStore.loading ? <ActivityIndicator size={"small"} /> : <Button title={"fetch users"} onPress={() => UserStore.fetchUsers()}/>
				}

				<View>
					{
						UserStore.error ? <Text>{UserStore.error}</Text> :
							(
								UserStore.users.map((user, key) => (
									<View key={key}>
										<Text>{ user.name.first }</Text>
									</View>
								))
							)
					}
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({});
