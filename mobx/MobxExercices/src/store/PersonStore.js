import {observable, autorun, action} from 'mobx';

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
}

export default new PersonStore()
