import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import ProductCard from '../ProductCard';

describe('The <ProductCard> component', () => {
  const mockContent = {
    title: 'Mock title',
    price: 'P200.00',
    description: 'Mock description',
    technicalDetails: ['mock detail 1', 'mock detail 2'],
    type: 'sunglasses',
    color: 'black',
    quantity: 20,
    onSale: false,
    id: '123456',
    images: {},
    compressedImages: {},
  };

  const mockContentOnSale = {
    title: 'Mock title',
    price: 'P200.00',
    originalPrice: 'P500.00',
    description: 'Mock description',
    technicalDetails: ['mock detail 1', 'mock detail 2'],
    type: 'sunglasses',
    color: 'black',
    quantity: 20,
    onSale: true,
    id: '123456',
    images: {},
    compressedImages: {},
  };

  const mockContentSoldOut = {
    title: 'Mock title',
    price: 'P200.00',
    originalPrice: 'P500.00',
    description: 'Mock description',
    technicalDetails: ['mock detail 1', 'mock detail 2'],
    type: 'sunglasses',
    color: 'black',
    quantity: 0,
    onSale: true,
    id: '123456',
    images: {},
    compressedImages: {},
  };

  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContent} />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { level: 5, name: /mock title/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('P200.00')).toBeInTheDocument();
  });

  it('renders a badge when product is on sale', () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContentOnSale} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/sale/i)).toBeInTheDocument();
  });

  it('renders the original price when product is on sale', () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContentOnSale} />
      </BrowserRouter>,
    );

    expect(screen.getByText('P500.00')).toBeInTheDocument();
  });

  it('does not render a badge when product is not on sale', () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContent} />
      </BrowserRouter>,
    );

    expect(screen.queryByText(/sale/i)).not.toBeInTheDocument();
  });

  it('renders a badge when product is sold out', () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContentSoldOut} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/sold out/i)).toBeInTheDocument();
  });

  it('does not render a badge when product is not sold out', () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContent} />
      </BrowserRouter>,
    );

    expect(screen.queryByText(/sold out/i)).not.toBeInTheDocument();
  });

  it('renders front profile by default', () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContent} />
      </BrowserRouter>,
    );

    expect(screen.getByAltText(/front profile/i)).toBeInTheDocument();
  });

  it('renders side profile on hover', async () => {
    render(
      <BrowserRouter>
        <ProductCard content={mockContent} />
      </BrowserRouter>,
    );

    const user = userEvent.setup();

    expect(screen.queryByAltText(/side profile/i)).not.toBeInTheDocument();

    await user.hover(screen.getByRole('img'));

    expect(screen.getByAltText(/side profile/i)).toBeInTheDocument();
  });
});
