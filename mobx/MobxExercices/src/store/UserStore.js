import {observable,configure} from 'mobx';

configure({
	enforceActions: "observed"
});

class UserStore{

}

export default new UserStore()
