import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import FeaturedProducts from '../FeaturedProducts';

describe('The <FeaturedProducts> component', () => {
  function SampleProductPage() {
    const { productId } = useParams();

    return <h1>{productId}</h1>;
  }

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeaturedProducts />} />
          <Route
            path="products/eyeglasses/:productId"
            element={<SampleProductPage />}
          />
        </Routes>
      </BrowserRouter>,
    );
  });

  it('renders correctly', () => {
    expect(
      screen.getByRole('heading', { level: 3, name: /new arrivals/i }),
    ).toBeInTheDocument();
  });

  it('links to a product page', async () => {
    const user = userEvent.setup();

    const links = await screen.findAllByRole('link');

    await user.click(links[0]);

    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'c8WHSQoYrDlW' }),
    ).toBeInTheDocument();
  });
});
