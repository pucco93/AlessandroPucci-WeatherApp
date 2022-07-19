import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// Check if pressing changing theme, it changes it for real
test('check changing theme', () => {
  render(<App />);
  const themeButton = screen.getByTestId("change-theme");
  const titleElement = screen.getByTestId("title");
  const textColor = titleElement.getAttribute("data-test-colormode");
  let changingColor = textColor;
  console.log(titleElement)
  console.log(textColor)
  console.log('\n\n\n\n\n')

  fireEvent.click(themeButton);
  console.log(titleElement)
  console.log(textColor)
  console.log('\n\n\n\n\n')

  expect(changingColor).toBe(textColor == "light" ? "dark" :  "light");
});
