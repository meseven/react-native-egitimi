import { LangContextProvider } from "./src/context/LangContext";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import Router from "./src/Router";

function App() {
	return (
		<LangContextProvider>
			<ThemeContextProvider>
				<Router />
			</ThemeContextProvider>
		</LangContextProvider>
	);
}

export default App;
