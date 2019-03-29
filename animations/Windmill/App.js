import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Windmill from './src/components/Windmill';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
				<Windmill />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94BBA9',
  },
});
