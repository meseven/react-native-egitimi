import {observable, action, configure, runInAction} from 'mobx';
import axios from 'axios';

import {API_BASE} from '../constants';

configure({
	enforceActions: 'observed'
});

import AuthStore from './AuthStore';

class MovieStore{
	@observable movies = [];


	@action async getMovies(){
		try{
			const {data} = await axios.get(`${API_BASE}/api/movies`, {
				headers: {
					'x-access-token': AuthStore.token
				}
			});

			runInAction(() => {
				this.movies = data
			})
		}catch (e) {
			console.log(e);
		}
	}
}

export default new MovieStore()
