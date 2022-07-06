import { UsersContextProvider } from "./src/context/UsersContext";
import Router from "./src/Router";

function App() {
	return (
		<UsersContextProvider>
			<Router />
		</UsersContextProvider>
	);
}

export default App;
