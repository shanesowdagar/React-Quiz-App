import {
	Badge,
	Box,
	Button,
	Flex,
	Grid,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { decode } from 'html-entities';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const QuestionCard = ({
	questionObj,
	nextQuestion,
	questionNumber,
	isLastQuestion,
	numRightAnswers,
	setNumRightAnswers,
	totalNoQuestions,
}) => {
	let { question, category, correct_answer, incorrect_answers, type } =
		questionObj;

	const boxBg = useColorModeValue(null, 'gray.700');
	const booleanBtnBg = useColorModeValue('gray.200', 'gray.700');
	const booleanBtnColorScheme = useColorModeValue('gray', 'gray');

	const history = useHistory();

	const [userAnsweredCorrectly, setUserAnsweredCorrectly] = useState('');
	// const [selectedAnswer, setSelectedAnswer] = useState('');
	const [disabledAnswerBtn, setDisabledAnswerBtn] = useState(false);

	const btnClick = (e) => {
		let selectedAnswer = e.target.innerText;
		// setSelectedAnswer(selectedAnswer);
		setDisabledAnswerBtn(!disabledAnswerBtn);

		//Check if selectedAnswer is correct_answer

		if (selectedAnswer === correct_answer) {
			setUserAnsweredCorrectly(true);
			setNumRightAnswers(numRightAnswers + 1);
		} else {
			setUserAnsweredCorrectly(false);
		}
	};

	const completeQuiz = () => {
		history.replace('/results', {
			numRightAnswers: numRightAnswers,
			totalNoQuestions: totalNoQuestions,
		});
	};

	useEffect(() => {
		setUserAnsweredCorrectly('');
		setDisabledAnswerBtn(false);
	}, [questionObj]);

	return (
		<Box
			bg={boxBg}
			background=''
			p='20px'
			w={['100%', '80%', 'auto']}
			maxW={[null, null, '500px']}
			minW={[null, null, '500px']}
			borderRadius='7px'
		>
			<Heading mb='30px'>Question {questionNumber}</Heading>

			<Badge mb='15px' colorScheme='teal' variant='solid'>
				{category}
			</Badge>

			<Text mb='30px'>{decode(question)}</Text>

			{type === 'boolean' && (
				<Grid templateColumns='1fr 1fr' templateRows='1fr' gap='6'>
					<Button
						onClick={btnClick}
						variant='outline'
						border='none'
						colorScheme={booleanBtnColorScheme}
						bg={booleanBtnBg}
						disabled={disabledAnswerBtn}
					>
						True
					</Button>
					<Button
						onClick={btnClick}
						variant='outline'
						border='none'
						colorScheme={booleanBtnColorScheme}
						bg={booleanBtnBg}
						disabled={disabledAnswerBtn}
					>
						False
					</Button>
				</Grid>
			)}

			{type === 'multiple' && (
				<Grid
					templateColumns={['1fr', '1fr 1fr']}
					templateRows={('repeat(4,1fr)', '1fr 1fr')}
					gap={['3', '6']}
				>
					{[...incorrect_answers, correct_answer].map((answer, index) => (
						<Button
							key={index}
							onClick={btnClick}
							variant='outline'
							border='none'
							colorScheme={booleanBtnColorScheme}
							bg={booleanBtnBg}
							disabled={disabledAnswerBtn}
						>
							{decode(answer)}
						</Button>
					))}
				</Grid>
			)}

			{userAnsweredCorrectly === true && (
				<Heading textAlign='center' my='10px' color='green.500'>
					Correct Answer
				</Heading>
			)}
			{userAnsweredCorrectly === false && (
				<Heading textAlign='center' my='10px' color='red.500'>
					Wrong Answer
				</Heading>
			)}

			{userAnsweredCorrectly !== '' && isLastQuestion === false && (
				<Flex justifyContent='center'>
					<Button onClick={nextQuestion}>Next Question</Button>
				</Flex>
			)}

			{userAnsweredCorrectly !== '' && isLastQuestion === true && (
				<Flex justifyContent='center'>
					<Button onClick={completeQuiz}>Results</Button>
				</Flex>
			)}
		</Box>
	);
};

export default QuestionCard;
