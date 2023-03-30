import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FeaturedCollection from '../FeaturedCollection';

describe('The <FeaturedCollection> component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeaturedCollection />} />
          <Route path="/products" element={<h1>Products</h1>} />
        </Routes>
      </BrowserRouter>,
    );
  });

  it('renders correctly', () => {
    expect(
      screen.getByRole('heading', { level: 4, name: /amora/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('links to the shop page', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('link', { name: /browse amora/i }));

    expect(
      screen.getByRole('heading', { level: 1, name: /products/i }),
    ).toBeInTheDocument();
  });
});
