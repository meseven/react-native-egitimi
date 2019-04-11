import {observable} from 'mobx';

class UserStore{
	@observable username = "mseven"
}

export default new UserStore();
