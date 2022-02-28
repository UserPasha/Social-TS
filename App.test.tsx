import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import StateOfSoc, {changeForNewMessage, changeForNewPost} from "./Redux/stateOfSoc";
import stateOfSoc from "./Redux/stateOfSoc";

test('renders learn react link', () => {
  render(<App state={stateOfSoc} changeForNewMessage={changeForNewMessage} changeForNewPost={changeForNewPost}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
