import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import io from 'socket.io-client';

export default class App extends Component {
  state = {
    onlineCount: 0
  };

  componentDidMount() {
    this.io = io.connect('http://localhost:3000', {
      timeout: 10000
    });

    this.io.on('newUser', onlineCount => {
      this.setState({
        onlineCount,
      });
    });

    this.io.on('disUser', onlineCount => {
      this.setState({
        onlineCount,
      });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{this.state.onlineCount}</Text>
          <Text>Online now</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  countContainer: {
    alignItems: 'center'
  },
  count: {
    fontSize: 32
  }
});
