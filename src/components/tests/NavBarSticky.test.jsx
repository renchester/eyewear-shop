import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import NavBarSticky from '../NavBarSticky';

import CartContext from '../../context/CartContext';

describe('The <NavBarSticky> component', () => {
  const toggleSearchView = vi.fn();

  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={[[]]}>
          <NavBarSticky toggleSearchView={toggleSearchView} />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(6);
  });

  it('shows the menu on click', async () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={[[]]}>
          <NavBarSticky toggleSearchView={toggleSearchView} />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.queryByTestId('menu-dropdown')).not.toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByTestId('menu-btn'));

    expect(screen.getByTestId('menu-dropdown')).toBeInTheDocument();
  });

  it('hides the menu when the hide menu button is clicked', async () => {
    render(
      <BrowserRouter>
        <CartContext.Provider value={[[]]}>
          <NavBarSticky toggleSearchView={toggleSearchView} />
        </CartContext.Provider>
      </BrowserRouter>,
    );

    const user = userEvent.setup();
    await user.click(screen.getByTestId('menu-btn'));

    expect(screen.getByTestId('menu-dropdown')).toBeInTheDocument();
    expect(screen.getByTestId('hide-menu-btn')).toBeInTheDocument();

    await user.click(screen.getByTestId('hide-menu-btn'));

    setTimeout(
      () =>
        expect(screen.queryByTestId('menu-dropdown')).not.toBeInTheDocument(),
      500,
    );
  });
});
