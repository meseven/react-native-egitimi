import {observable,configure, action} from 'mobx';
import axios from 'axios';

configure({
	enforceActions: "observed"
});

class UserStore{
	@observable users = [];
	@observable loading = false;

	@action fetchUsers (){
		this.users = [];
		this.loading = true;
		axios
			.get('https://randomuser.me/api/?results=10')
			.then(response => response.data.results)
			.then(this.fetchUsersSuccess, this.fetchUsersError)
	}

	@action.bound fetchUsersSuccess(users){
		this.loading = false;
		this.users = users;
	}

	@action.bound fetchUsersError(){
		this.loading = false;
		alert('error')
	}
}

export default new UserStore()
