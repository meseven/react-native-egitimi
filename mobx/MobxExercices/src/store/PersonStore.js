import {observable, autorun, action, configure, computed, runInAction} from 'mobx';

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
		setTimeout(() => {
			runInAction(() => {
				this.firstname = "Mehmet";
				this.surname = "Seven";
			})
		}, 2000)
	}

	@computed get fullName(){
		return `${this.firstname} ${this.surname}`
	}
}

export default new PersonStore()
