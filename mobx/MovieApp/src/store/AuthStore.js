import {observable, action} from 'mobx';
import axios from 'axios';

import {API_BASE} from '../constants';

class AuthStore{
	@action register = async ({ username, password }, bag) => {
		try{
			const { data } = await axios.post(`${API_BASE}/register`, { username, password })

			if (data.hasOwnProperty('errors')) {
			  bag.setErrors(data.errors)
			}else{
				alert('welcome')
			}

			bag.setSubmitting(false);
		}catch (e) {
			console.log(e);
			bag.setSubmitting(false);
		}
	}
}

export default new AuthStore();
