import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './navigation/AppRoutes';

function App() {
	return (
		<ChakraProvider>
			<AppRoutes />
		</ChakraProvider>
	);
}

export default App;
