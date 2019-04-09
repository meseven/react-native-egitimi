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
			.then(this.fetchUsersSucces, this.fetchUsersError)
	}

	@action fetchUsersSucces = (users) => {
		this.users = users;
	}

	@action fetchUsersError = () => {
		alert('error')
	}
}

export default new UserStore()
