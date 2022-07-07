import create from "zustand";
import axios from "axios";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const useStore = (set, get) => ({
	users: [],
	loading: true,
	error: null,
	fetchUsers: async () => {
		try {
			const { data } = await axios(
				"https://jsonplaceholder.typicode.com/users"
			);
			set({ users: data, loading: false });
		} catch (err) {
			set({ error: err.message, loading: false });
		}
	},
	addUser: (data) => {
		set((state) => ({ users: [{ ...data, id: uuidv4() }, ...state.users] }));
	},
	removeUser: (id) => {
		const cloned = [...get().users];
		const index = cloned.findIndex((user) => user.id === id);
		cloned.splice(index, 1);
		set({ users: [...cloned] });
	},
});

export default create(useStore);
