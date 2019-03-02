import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.headBackground} />
				<View>
					<Text style={styles.logo}>UDAC</Text>
					<Text style={styles.logoDescription}>Property & Tax Survey</Text>
				</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
		paddingVertical: 80
  },
	headBackground: {
  	position: 'absolute',
		top: 0,
		left: 0,
		height: 250,
		width: '100%',
		backgroundColor: '#1572de'
	},
	logo: {
  	textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#f2f2f2'
	},
	logoDescription: {
  	textAlign: 'center',
		color: '#f2f2f2'
	}
});
