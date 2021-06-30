# Project Name & Pitch

React Quiz Application

Simple frontend project which shows a list of multi-choice questions. User has to provide the right answer and final result/score will be shown

BUILT with ☕ using React, Chakra UI, Axios, React Router 

API used : https://opentdb.com/

___

Project deployed at [https://epic-mclean-f28a81.netlify.app/](https://epic-mclean-f28a81.netlify.app/)

## Project Status
[COMPLETE]

The home screen provides a minimal form, where the category, difficulty and type of question can be selected.

Based on form, the correct category of questions are retrieved from API and shown.

Each question is iterated alongside the different potential answers

Upon user selection, the result is shown to user, whether the chosen answer was indeed correct or not

## Reflection

This simple project was done in a couple of days. The reason for doing this project was simply for learning [Chakra UI](https://chakra-ui.com/)

I wanted to understand how Chakra UI works, it's composability nature, theming capabilities and support for dark/light mode.

There are more things which can be added and refactored

## Future Improvements/Functionalties

1. Right now, if a user chooses a wrong answer, a message will be shown, but the user will never know the right answer. Probably change some UI/UX elements to show user the actual correct answer

2. In the QuestionCard there is a Badge component which shows the category of question. It has a fixed color of green. Could randomize the color based on the colors which are part of the default Chakra UI theme  

3. When the quiz is completed, the results page shows only a text consisting of number of correct answers compared to total number of questions. Looks kind of dull in my opinion
Could add some animations (like fireworks/confettis) for when user gets all right answers. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

