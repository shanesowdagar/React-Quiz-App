import { Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

const Quiz = () => {
	const location = useLocation();
	const history = useHistory();

	const [quizData, setQuizData] = useState(location.state);
	const [questionIndex, setQuestionIndex] = useState(0);

	const nextQuestion = () => {
		if (questionIndex !== 9) {
			setQuestionIndex(questionIndex + 1);
		}
	};

	if (quizData === undefined) {
		return <Redirect to='/' />;
	}

	console.log(quizData);

	return (
		<Flex
			direction='column'
			justifyContent='space-evenly'
			w='90%'
			margin='auto'
			border='1px solid yellow'
			h='100vh'
		>
			<QuestionCard
				questionObj={quizData.results[questionIndex]}
				nextQuestion={nextQuestion}
				questionNumber={questionIndex + 1}
			/>
		</Flex>
	);
};

export default Quiz;
