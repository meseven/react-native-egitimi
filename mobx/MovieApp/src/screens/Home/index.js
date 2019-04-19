import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import LogoutButton from '../../components/LogoutButton';
import MovieListItem from './MovieListItem';

import { Content, List, Spinner } from 'native-base';
import {observer,inject} from 'mobx-react';

@inject('MovieStore')
@observer
export default class Home extends Component {
	static navigationOptions = {
		headerLeft: LogoutButton,
	};

	componentDidMount() {
		this.props.MovieStore.getMovies()
	}

	render() {
  	const { MovieStore } = this.props;
 		return (
			<Content>
				{ MovieStore.loading && <Spinner size={"small"} color={"#333"} />}
				<List>
					<FlatList
						data={MovieStore.movies}
						keyExtractor={item => item._id}
						renderItem={({item}) => <MovieListItem item={item}/>}
					/>
				</List>
			</Content>
		);
  }
}

const styles = StyleSheet.create({});
