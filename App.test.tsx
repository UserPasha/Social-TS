import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import StateOfSoc from "./Redux/stateOfSoc";

test('renders learn react link', () => {
  render(<App profilePage={StateOfSoc.profilePage} dialogsPage={StateOfSoc.dialogsPage}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
