import { Box, Button, FormControl, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const QuestionCard = ({ questionObj, nextQuestion, questionNumber }) => {
	let { question, correct_answer, incorrect_answers, type } = questionObj;

	const [userAnsweredCorrectly, setUserAnsweredCorrectly] = useState('');

	const btnClick = (e) => {
		let selectedAnswer = e.target.innerText;

		//Check if selectedAnswer is correct_answer

		if (selectedAnswer === correct_answer) {
			setUserAnsweredCorrectly(true);
		} else {
			setUserAnsweredCorrectly(false);
		}
	};

	useEffect(() => {
		setUserAnsweredCorrectly('');
	}, [questionObj]);

	// console.log(questionObj);

	return (
		<Box border='1px solid red'>
			<Heading mb='10px'>Question {questionNumber}</Heading>

			<Text mb='30px' dangerouslySetInnerHTML={{ __html: question }} />

			{type === 'boolean' && (
				<Box>
					<Button
						onClick={btnClick}
						colorScheme='gray.600'
						mr='20px'
						variant='outline'
					>
						True
					</Button>
					<Button onClick={btnClick} colorScheme='gray.600' variant='outline'>
						False
					</Button>
				</Box>
			)}

			{type === 'multiple' && (
				<Box>
					{[...incorrect_answers, correct_answer].map((answer) => (
						<Button
							onClick={btnClick}
							colorScheme='gray.600'
							mr='20px'
							variant='outline'
						>
							{answer}
						</Button>
					))}
				</Box>
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

			{userAnsweredCorrectly !== '' && (
				<Button mb='30px' onClick={nextQuestion}>
					Next Question
				</Button>
			)}
		</Box>
	);
};

export default QuestionCard;
