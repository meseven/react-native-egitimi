import {observable, action} from 'mobx';

class MovieStore{
	@observable movies = [];
}

export default new MovieStore()
