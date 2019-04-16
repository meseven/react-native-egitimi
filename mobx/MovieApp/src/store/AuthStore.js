import {observable, configure, action} from 'mobx';
import axios from 'axios';
import {API_BASE} from '../constants';

configure({
	enforceActions: "observed"
});

class AuthStore{
	@observable token = null;

	@action login = async ({ username, password }) => {
		try{
			const { data } = await axios.post(`${API_BASE}/authenticate`, { username, password })
			console.log(data);
		}catch (e) {

		}
	}
}

export default new AuthStore();
