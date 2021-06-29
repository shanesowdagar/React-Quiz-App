import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { decode } from 'html-entities';

const QuestionCard = ({
	questionObj,
	nextQuestion,
	questionNumber,
	isLastQuestion,
	numRightAnswers,
	setNumRightAnswers,
}) => {
	let { question, correct_answer, incorrect_answers, type } = questionObj;

	const history = useHistory();

	const [userAnsweredCorrectly, setUserAnsweredCorrectly] = useState('');

	const btnClick = (e) => {
		let selectedAnswer = e.target.innerText;

		//Check if selectedAnswer is correct_answer

		if (selectedAnswer === correct_answer) {
			setUserAnsweredCorrectly(true);
			setNumRightAnswers(numRightAnswers + 1);
		} else {
			setUserAnsweredCorrectly(false);
		}
	};

	const completeQuiz = () => {
		history.replace('/results', { numRightAnswers: numRightAnswers });
	};

	useEffect(() => {
		setUserAnsweredCorrectly('');
	}, [questionObj]);

	// TODO Refactor the questionCard to make it
	// responsive on smaller screens
	return (
		<Box
			background='gray.700'
			p='20px'
			w={['100%', '80%', 'auto']}
			maxW={[null, null, '500px']}
			minW={[null, null, '500px']}
			borderRadius='7px'
		>
			<Heading mb='30px'>Question {questionNumber}</Heading>

			<Text mb='30px'>{decode(question)}</Text>

			{type === 'boolean' && (
				<Grid templateColumns='1fr 1fr' templateRows='1fr' gap='6'>
					<Button
						onClick={btnClick}
						colorScheme='gray.600'
						// mr='20px'
						variant='outline'
					>
						True
					</Button>
					<Button onClick={btnClick} colorScheme='gray.600' variant='outline'>
						False
					</Button>
				</Grid>
			)}

			{type === 'multiple' && (
				<Grid templateColumns='1fr 1fr' templateRows='1fr 1fr' gap='6'>
					{[...incorrect_answers, correct_answer].map((answer, index) => (
						<Button
							key={index}
							onClick={btnClick}
							colorScheme='gray.600'
							variant='outline'
						>
							{decode(answer)}
						</Button>
					))}
				</Grid>
			)}

			{userAnsweredCorrectly === true && (
				<Heading my='10px' color='green.500'>
					Correct Answer
				</Heading>
			)}
			{userAnsweredCorrectly === false && (
				<Heading my='10px' color='red.500'>
					Wrong Answer
				</Heading>
			)}

			{userAnsweredCorrectly !== '' && isLastQuestion === false && (
				<Button mb='30px' onClick={nextQuestion}>
					Next Question
				</Button>
			)}

			{userAnsweredCorrectly !== '' && isLastQuestion === true && (
				<Button mb='30px' onClick={completeQuiz}>
					Results
				</Button>
			)}
		</Box>
	);
};

export default QuestionCard;
