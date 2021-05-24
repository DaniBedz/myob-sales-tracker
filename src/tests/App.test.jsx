import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';

function addSale(companyName) {
  const newSaleInput = screen.getByPlaceholderText(/Add new sale/i);
  const newSaleInputSubmitBtn = screen.getByLabelText(/add new sale/i);

  userEvent.type(newSaleInput, companyName);
  userEvent.click(newSaleInputSubmitBtn);
}

function deleteSale() {
  const deleteIcon = screen.getByLabelText(/delete sale/i);
  userEvent.click(deleteIcon);
  const deleteBtn = document.querySelector('.ajs-ok');
  userEvent.click(deleteBtn);
}

beforeEach(() => {
  render(<App />);
  window.localStorage.setItem('sales', JSON.stringify([]));
});

test('renders no sales message if no sales', () => {
  const noSalesMsg = screen.getByText(/no sales to display/i);
  expect(noSalesMsg).toBeInTheDocument();
});

test('can add sale to sale list', () => {
  addSale('Sample Company Pty Ltd');
  expect(screen.getByDisplayValue(/sample company/i)).toBeInTheDocument();
  deleteSale();
});

test('can delete a sale', () => {
  addSale('Company To Delete Pty Ltd');
  const sales = screen.queryByRole('article');
  deleteSale();
  expect(sales).not.toBeInTheDocument();
});
