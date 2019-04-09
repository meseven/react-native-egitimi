import {observable, action, autorun} from 'mobx';

class CounterStore{
	@observable count = 1;

	constructor(){
		autorun(() => {
			alert(this.count)
		})
	}

	@action decrement = () => {
		this.count--;
	}

	@action increment = () => {
		this.count++;
	}
}

export default new CounterStore()
