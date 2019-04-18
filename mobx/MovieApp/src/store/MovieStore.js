import {observable, action, configure, runInAction} from 'mobx';
import axios from 'axios';

import {API_BASE} from '../constants';

configure({
	enforceActions: 'observed'
});

import AuthStore from './AuthStore';

class MovieStore{
	@observable movies = [];
	@observable loading = false;

	@action async getMovies(){
		this.loading = true;
		try{
			const {data} = await axios.get(`${API_BASE}/api/movies`, {
				headers: {
					'x-access-token': AuthStore.token
				}
			});

			runInAction(() => {
				this.movies = data;
				this.loading = false;
			})
		}catch (e) {
			this.loading = false;
			console.log(e);
		}
	}
}

export default new MovieStore()
