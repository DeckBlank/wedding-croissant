import  * as React from 'react';
import * as Testing from '@testing-library/react';
const { render, screen } = Testing;
import App from './App';

test(`renders learn react link`, () => {
  render(<App />);

  
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
