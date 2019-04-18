import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import LogoutButton from '../../components/LogoutButton';
import ListItem from './ListItem';

export default class Home extends Component {
	static navigationOptions = {
		headerLeft: LogoutButton
	};

  render() {
    return (
      <View>
				<FlatList
					data={[{key: 'a'}, {key: 'b'}]}
					renderItem={({item}) => <ListItem item={item} />}
				/>
			</View>
    );
  }
}

const styles = StyleSheet.create({});
