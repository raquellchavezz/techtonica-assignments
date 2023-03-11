import { render, screen } from '@testing-library/react';
import App from './App';
import Game from './components/game';
import QuestionCard from './components/questioncard';
import Score from './components/scoreBoard';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('renders the question card component', () => {
  render(<Game />);
  const score = screen.getByText(/score/i); 
  expect(score).toBeInTheDocument()
});


test('renders the game.js component', () => {
  render(<Game/>);
});



test('renders the score board component', () => {
  render(<Score/>);
});


