import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "dark" ? "light" : "dark"));
	};

	const values = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContext;
