import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class AuthStore{
	@observable token = null;

	@action async saveToken(token){
		try{
			await AsyncStorage.setItem('token', token);
		}catch (e) {
			console.log(e);
		}
	}
}

export default new AuthStore();
