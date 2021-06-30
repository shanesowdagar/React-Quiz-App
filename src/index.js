import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ColorModeScript } from '@chakra-ui/react';
import MyTheme from './theme';

ReactDOM.render(
	<React.StrictMode>
		<ColorModeScript initialColorMode={MyTheme.config.initialColorMode} />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
