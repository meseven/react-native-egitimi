import {observable} from 'mobx';

class CounterStore{
	@observable count = 1;

	decrement = () => {
		this.count--;
	}

	increment = () => {
		this.count++;
	}
}

export default new CounterStore()
