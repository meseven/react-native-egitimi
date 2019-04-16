import {observable} from 'mobx';

class AuthStore{
	@observable username = "mseven";
}

export default new AuthStore();
