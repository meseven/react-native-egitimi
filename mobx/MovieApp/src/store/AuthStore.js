import {observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

// navigation service
import NavigationService from '../NavigationService';

class AuthStore{
	@observable token = null;

	@action async saveToken(token){
		try{
			await AsyncStorage.setItem('token', token);
			console.log(NavigationService);
		}catch (e) {
			console.log(e);
		}
	}
}

export default new AuthStore();
