import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const MyTheme = extendTheme({ config });

export default MyTheme;
