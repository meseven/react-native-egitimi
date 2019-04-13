import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import io from 'socket.io-client';

export default class App extends Component {
  componentDidMount() {
    this.io = io.connect('http://localhost:3000', {
      timeout: 10000
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
