import { render, screen } from '@testing-library/react';
import React from 'react';
import UseRefComponent from './UseRefComponent';

test('renders useRef component', () => {
  render(<UseRefComponent/>);
  const inputElement = screen.getByRole("textbox")
  expect(inputElement).toBeInTheDocument();
})