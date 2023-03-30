import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from '../Hero';

describe('The <Hero> component', () => {
  let user;

  beforeEach(() => {
    user = userEvent.setup();

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/products" element={<h1>SHOP</h1>} />
        </Routes>
      </BrowserRouter>,
    );
  });

  it('renders correctly', async () => {
    const heroTitle = await screen.findByRole('heading', { level: 3 });

    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle.textContent).toMatch(/solari/i);
  });

  it('should link to the products page', async () => {
    const shopLink = await screen.findByRole('link', { name: /shop now/i });

    expect(shopLink).toBeInTheDocument();

    await user.click(shopLink);

    expect(
      screen.getByRole('heading', { level: 1, name: /shop/i }),
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('link', { name: /shop now/i }),
    ).not.toBeInTheDocument();
  });
});
