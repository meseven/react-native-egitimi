import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Counter from './src/components/Counter';
import Person from './src/components/Person';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Person />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
