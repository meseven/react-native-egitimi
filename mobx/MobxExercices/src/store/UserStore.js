import {observable,configure, action, runInAction} from 'mobx';
import axios from 'axios';

configure({
	enforceActions: "observed"
});

class UserStore{
	@observable users = [];

	@action async fetchUsers (){
		try{
			const { data: {results} } = await axios.get('https://randomusser.me/api/?results=10');
			runInAction(() => {
				this.users = results;
			})
		}catch (e) {
			alert('error')
		}
	}
}

export default new UserStore()
