import Router from "./src/Router";
import { NativeBaseProvider } from "native-base";

export default function App() {
	return (
		<NativeBaseProvider>
			<Router />
		</NativeBaseProvider>
	);
}
