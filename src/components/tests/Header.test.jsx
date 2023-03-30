import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import CartContext from '../../context/CartContext';
import Header from '../Header';

describe('The <Header> component', () => {
  it('renders logo correctly', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={[[]]}>
          <Header />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    const logos = screen.getAllByRole('img');

    expect(logos[0].getAttribute('alt')).toMatch(/savant logo/i);
  });

  it('displays the search panel on click', async () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={[[]]}>
          <Header />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    const user = userEvent.setup();

    await user.click(screen.getByTestId('search-button'));

    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});

describe('Cart badge', () => {
  it('displays the correct amount of items in the cart ', () => {
    const mockCart = [{ id: '00', title: 'Zero' }];
    render(
      <BrowserRouter>
        <CartContext.Provider value={[mockCart]}>
          <Header />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByTestId('cart-badge')).toHaveTextContent('1');
  });

  it('does not show if there are no items in the cart', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={[[]]}>
          <Header />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.queryByTestId('cart-badge')).not.toBeInTheDocument();
  });
});
