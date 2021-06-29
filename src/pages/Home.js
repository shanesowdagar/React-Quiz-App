import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import getQuestions from '../services/getQuestions';

const Home = () => {
	const history = useHistory();

	const [formValues, setFormValues] = useState({
		category: 'any',
		difficulty: 'easy',
		type: 'boolean',
		isSubmitting: false,
	});

	const handleFormSubmit = (e) => {
		e.preventDefault();

		//set button is submitting state
		setFormValues({
			...formValues,
			isSubmitting: true,
		});

		let { category, difficulty, type } = formValues;

		//Call the api and get the getQuestions
		getQuestions(category, difficulty, type)
			.then((res) => {
				console.log(res.data);
				setFormValues({
					...formValues,
					isSubmitting: false,
				});

				history.push('/quiz', res.data);
			})
			.catch((err) => {
				console.log(err);
				setFormValues({
					...formValues,
					isSubmitting: false,
				});
			});
	};

	return (
		<Flex
			// background={['pink', 'brown', 'whatsapp.700', 'telegram.800']}
			direction='column'
			justifyContent='space-evenly'
			w='90%'
			margin='auto'
			// border='1px solid red'
			h='100vh'
		>
			<Heading textAlign='center'>Quiz Application</Heading>

			<Box
				// alignSelf='center'
				alignSelf={['stretch', 'center']}
				w={[null, '100%', '500px']}
				p='10px'
				// border='2px solid yellow'
				background='gray.700'
				borderRadius='7px'
			>
				<form display='flex' direction='column' onSubmit={handleFormSubmit}>
					<FormControl id='category' mb='20px'>
						<FormLabel>Quiz Category</FormLabel>
						<Select
							display='inline-block'
							variant='filled'
							value={formValues.category}
							onChange={(e) =>
								setFormValues({ ...formValues, category: e.target.value })
							}
						>
							<option value='any'>Any Category</option>
							<option value='9'>General Knowledge</option>
							<option value='10'>Entertainment: Books</option>
							<option value='11'>Entertainment: Film</option>
							<option value='12'>Entertainment: Music</option>
							<option value='13'>Entertainment: Musicals &amp; Theatres</option>
							<option value='14'>Entertainment: Television</option>
							<option value='15'>Entertainment: Video Games</option>
							<option value='16'>Entertainment: Board Games</option>
							<option value='17'>Science &amp; Nature</option>
							<option value='18'>Science: Computers</option>
							<option value='19'>Science: Mathematics</option>
							<option value='20'>Mythology</option>
							<option value='21'>Sports</option>
							<option value='22'>Geography</option>
							<option value='23'>History</option>
							<option value='24'>Politics</option>
							<option value='25'>Art</option>
							<option value='26'>Celebrities</option>
							<option value='27'>Animals</option>
							<option value='28'>Vehicles</option>
							<option value='29'>Entertainment: Comics</option>
							<option value='30'>Science: Gadgets</option>
							<option value='31'>
								Entertainment: Japanese Anime &amp; Manga
							</option>
							<option value='32'>
								Entertainment: Cartoon &amp; Animations
							</option>
						</Select>
					</FormControl>

					<FormControl id='difficulty' mb='20px'>
						<FormLabel>Difficulty</FormLabel>
						<Select
							display='inline-block'
							variant='filled'
							value={formValues.difficulty}
							onChange={(e) =>
								setFormValues({ ...formValues, difficulty: e.target.value })
							}
						>
							<option value='easy'>Easy</option>
							<option value='medium'>Medium</option>
							<option value='hard'>Hard</option>
						</Select>
					</FormControl>

					<FormControl id='type' mb='20px'>
						<FormLabel>Type</FormLabel>
						<Select
							display='inline-block'
							variant='filled'
							value={formValues.type}
							onChange={(e) =>
								setFormValues({ ...formValues, type: e.target.value })
							}
						>
							<option value='boolean'>True/False</option>
							<option value='multiple'>Multiple Choice</option>
						</Select>
					</FormControl>

					<FormControl
						// border='1px solid red'
						display='flex'
						justifyContent='center'
					>
						<Button
							type='submit'
							colorScheme='teal'
							variant='solid'
							isLoading={formValues.isSubmitting}
						>
							Start Quiz
						</Button>
					</FormControl>
				</form>
			</Box>
		</Flex>
	);
};

export default Home;
