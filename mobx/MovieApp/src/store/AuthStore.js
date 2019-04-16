import {observable, configure, action} from 'mobx';
import axios from 'axios';
import {API_BASE} from '../constants';

configure({
	enforceActions: "observed"
});

class AuthStore{
	@observable token = null;

	@action login = async ({ username, password }, bag) => {
		try{
			const { data } = await axios.post(`${API_BASE}/authenticate`, { username, password })

			bag.setSubmitting(false);

			if (!data.status) {
			  alert(data.message);
				return false;
			}

			this.token = data.token;
		}catch (e) {
			alert('Network error!')
		}
	}
}

export default new AuthStore();
