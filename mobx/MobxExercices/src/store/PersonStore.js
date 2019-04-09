import {observable, autorun, action, configure, computed} from 'mobx';

configure({
	enforceActions: "observed"
});

class PersonStore{
	@observable firstname = "None";
	@observable surname = "None";

	constructor(){
		autorun(() => {
			console.log(`${this.firstname} - ${this.surname} `);
		})
	}

	@action changeName(){
		this.firstname = "Mehmet";
		this.surname = "Seven"
	}

	@computed get fullName(){
		return `${this.firstname} ${this.surname}`
	}
}

export default new PersonStore()
