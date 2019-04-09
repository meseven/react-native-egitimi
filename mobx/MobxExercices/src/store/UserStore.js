import {observable,configure, action, runInAction} from 'mobx';
import axios from 'axios';

configure({
	enforceActions: "observed"
});

class UserStore{
	@observable users = [];
	@observable loading = false;

	@action async fetchUsers (){
		this.loading = true;
		this.users = [];

		try{
			const { data: {results} } = await axios.get('https://randomuser.me/api/?results=10');
			runInAction(() => {
				this.users = results;
				this.loading = false;
			})
		}catch (e) {
			runInAction(() => {
				this.loading = false;
			});

			alert('error')
		}
	}
}

export default new UserStore()
