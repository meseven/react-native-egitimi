import { createContext, useContext, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const loadData = () => {
		axios("https://jsonplaceholder.typicode.com/users")
			.then((res) => setUsers(res.data))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	const addUser = (data) => {
		setUsers((prev) => [{ ...data, id: uuidv4() }, ...prev]);
	};

	const removeUser = (id) => {
		const cloned = [...users];
		const index = cloned.findIndex((user) => user.id === id);
		cloned.splice(index, 1);
		setUsers(cloned);
	};

	const values = {
		users,
		loading,
		error,
		addUser,
		removeUser,
		loadData,
	};

	return (
		<UsersContext.Provider value={values}>{children}</UsersContext.Provider>
	);
};

export const useUsers = () => {
	const context = useContext(UsersContext);

	if (context === undefined) {
		throw new Error("useUsers hook must be call inside UsersContextProvider");
	}

	return context;
};
