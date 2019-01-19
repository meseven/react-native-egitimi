import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
				<View style={styles.slideOne}>
					<Text>Merhaba!</Text>
				</View>
				<View style={styles.slideTwo}>
					<View style={[styles.box, styles.box1]}></View>
					<View style={[styles.box, styles.box2]}></View>
					<View style={[styles.box, styles.box3]}></View>
					<View style={[styles.box, styles.box2]}></View>
				</View>
      </View>
    );
  }
}

// eğer flex-direction row verilirse birincil eksen yatay olur.
// eğer flex-direction column verilirse birincil eksen dikey olur.

/*
*
* justifyContent: Birincil eksende elemanların nasıl konumlanacağını
* ---------------	belirler.
*
* 	- flex-start
* 	- flex-end
* 	- center
* 	- space-between
* 	- space-around
*
*
* alignItems: İkincil eksende elemanların nasıl konumlanacağını belirler.
* -----------
*
* */

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFEB3B',
		flex: 1
  },
	slideOne: {
		backgroundColor: '#607D8B',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	slideTwo: {
		backgroundColor: '#FF5722',
		flex: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	box: {
		width: 60,
		height: 60
	},
	box1: {
		backgroundColor:'#795548'
	},
	box2: {
		backgroundColor: '#9E9E9E'
	},
	box3: {
		backgroundColor: '#3F51B5'
	}
});
