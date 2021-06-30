import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const MyTheme = extendTheme({ config });

export default MyTheme;
