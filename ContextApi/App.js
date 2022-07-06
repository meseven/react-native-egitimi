import { ThemeContextProvider } from "./src/context/ThemeContext";
import Router from "./src/Router";

function App() {
	return (
		<ThemeContextProvider>
			<Router />
		</ThemeContextProvider>
	);
}

export default App;
