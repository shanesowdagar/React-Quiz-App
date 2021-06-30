import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './navigation/AppRoutes';
import MyTheme from './theme';

function App() {
	return (
		<ChakraProvider theme={MyTheme}>
			<AppRoutes />
		</ChakraProvider>
	);
}

export default App;
