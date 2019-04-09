import {observable,configure, action} from 'mobx';
import axios from 'axios';

configure({
	enforceActions: "observed"
});

class UserStore{
	@observable users = [];

	@action fetchUsers (){
		axios
			.get('https://randomuser.me/api/?results=10')
			.then(response => response.data.results)
			.then(this.fetchUsersSuccess, this.fetchUsersError)
	}

	@action.bound fetchUsersSuccess(users){
		this.users = users;
	}

	@action.bound fetchUsersError(){
		alert('error')
	}
}

export default new UserStore()
