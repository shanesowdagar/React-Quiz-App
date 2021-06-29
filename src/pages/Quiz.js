import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {
	const location = useLocation();
	const [quizData] = useState(location.state);
	const [questionIndex, setQuestionIndex] = useState(0);
	const [isLastQuestion, setIsLastQuestion] = useState(false);
	const [numRightAnswers, setNumRightAnswers] = useState(0);

	const nextQuestion = () => {
		// TODO Refactor
		// TODO Array index is being checked manually with hardcoded values
		// TODO : Refactor so that function works for any number of questions

		// The question index will always be from 0 index
		// If question Number 2 is being shown , the index is 1

		let newIndex = questionIndex + 1;

		if (newIndex < 3 && newIndex === 2) {
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
			direction='column'
			justifyContent='space-evenly'
			w='90%'
			margin='auto'
			// border='1px solid yellow'
			h='100vh'
		>
			<QuestionCard
				questionObj={quizData.results[questionIndex]}
				nextQuestion={nextQuestion}
				questionNumber={questionIndex + 1}
				isLastQuestion={isLastQuestion}
				numRightAnswers={numRightAnswers}
				setNumRightAnswers={setNumRightAnswers}
			/>
		</Flex>
	);
};

export default Quiz;
