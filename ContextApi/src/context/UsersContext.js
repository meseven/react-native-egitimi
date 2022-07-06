import { createContext, useContext, useState } from "react";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "Mehmet" },
		{ id: 2, name: "Ahmet" },
	]);

	const addUser = (data) => {
		setUsers((prev) => [{ ...data, id: uuidv4() }, ...prev]);
	};

	const values = {
		users,
		setUsers,
		addUser,
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
