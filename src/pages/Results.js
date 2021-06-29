import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

const Results = () => {
	const location = useLocation();
	console.log('🚀 ~ file: Results.js ~ line 7 ~ Results ~ location', location);

	const [numRightAnswers] = useState(location.state.numRightAnswers);

	if (numRightAnswers === undefined) {
		return <Redirect to='/' />;
	}

	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			w='90%'
			margin='auto'
			border='2px solid yellow'
			h='100vh'
		>
			<Box
				background='gray.700'
				p='20px'
				w={['100%', '80%', 'auto']}
				maxW={[null, null, '500px']}
				minW={[null, null, '500px']}
				borderRadius='7px'
			>
				<Heading mb='20px'>Results</Heading>
				<Text fontSize='lg'>
					{numRightAnswers} correct answers out of 3 questions
				</Text>
			</Box>
		</Flex>
	);
};

export default Results;
