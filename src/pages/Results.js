import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import ColorModeToggleBtn from '../components/ColorModeToggleBtn';

const Results = () => {
	const location = useLocation();
	const history = useHistory();

	const boxBg = useColorModeValue('gray.200', 'gray.700');

	const [numRightAnswers] = useState(location.state.numRightAnswers);

	if (numRightAnswers === undefined) {
		return <Redirect to='/' />;
	}

	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			position='relative'
			w='90%'
			margin='auto'
			// border='2px solid yellow'
			h='100vh'
		>
			<ColorModeToggleBtn />
			<Box
				bg={boxBg}
				p='20px'
				w={['100%', '80%', 'auto']}
				maxW={[null, null, '500px']}
				minW={[null, null, '500px']}
				borderRadius='7px'
			>
				<Heading mb='20px'>Results</Heading>
				<Text fontSize='lg' mb='20px'>
					{numRightAnswers} correct answers out of 3 questions
				</Text>

				<Flex justify='center'>
					<Button onClick={() => history.replace('/')}>Home</Button>
				</Flex>
			</Box>
		</Flex>
	);
};

export default Results;
