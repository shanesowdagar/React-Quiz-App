import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ColorModeToggleBtn = () => {
	const { toggleColorMode } = useColorMode();
	const BtnIcon = useColorModeValue(<MoonIcon />, <SunIcon />);

	return (
		<IconButton
			position='absolute'
			aria-label='Toggle Color Mode'
			top='10px'
			right='0'
			onClick={toggleColorMode}
			icon={BtnIcon}
		/>
	);
};

export default ColorModeToggleBtn;
