import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import Windmill from './src/components/Windmill';
import FlowersAndWay from './src/components/FlowersAndWay';
import Motor from './src/components/Motor';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Windmill />
				<Motor />
				<FlowersAndWay />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94BBA9',
    paddingTop: 200
  },
});
