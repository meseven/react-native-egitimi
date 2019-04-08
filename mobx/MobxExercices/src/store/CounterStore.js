import {observable, action} from 'mobx';

class CounterStore{
	@observable count = 1;

	@action decrement = () => {
		this.count--;
	}

	@action increment = () => {
		this.count++;
	}
}

export default new CounterStore()
