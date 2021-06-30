import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import ColorModeToggleBtn from '../components/ColorModeToggleBtn';
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {
	const location = useLocation();
	const [quizData] = useState(location.state);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [isLastQuestion, setIsLastQuestion] = useState(false);
	const [numRightAnswers, setNumRightAnswers] = useState(0);
	// const [totalNoQuestions] = useState(quizData.results.length);

	const nextQuestion = () => {
		// The question index will always be from 0 index
		// If question Number 2 is being shown , the index is 1

		let totalNoQuestions = quizData.results.length;
		console.log(
			'🚀 ~ file: Quiz.js ~ line 20 ~ nextQuestion ~ totalNoQuestions',
			totalNoQuestions
		);

		let newIndex = questionIndex + 1;

		if (newIndex < totalNoQuestions && newIndex === totalNoQuestions - 1) {
			setIsLastQuestion(true);
			setQuestionIndex(newIndex);
		} else {
			setQuestionIndex(newIndex);
		}
	};

	if (quizData === undefined) {
		return <Redirect to='/' />;
	}

	return (
		<Flex
			justifyContent='center'
			alignItems='center'
			direction='column'
			position='relative'
			w='90%'
			margin='auto'
			// border='2px solid yellow'
			h='100vh'
		>
			<ColorModeToggleBtn />
			<QuestionCard
				questionObj={quizData.results[questionIndex]}
				nextQuestion={nextQuestion}
				questionNumber={questionIndex + 1}
				isLastQuestion={isLastQuestion}
				numRightAnswers={numRightAnswers}
				setNumRightAnswers={setNumRightAnswers}
				totalNoQuestions={quizData.results.length}
			/>
		</Flex>
	);
};

export default Quiz;
