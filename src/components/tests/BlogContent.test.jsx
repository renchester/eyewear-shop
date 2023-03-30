import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BlogContent from '../BlogContent';
import blogMockData from './mock-data/blogMockData';

describe('The <BlogContent> component', () => {
  let blogLink;

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BlogContent content={blogMockData} headerTitle="Sample" />
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>,
    );

    blogLink = screen.getByRole('link', { name: /Read more/i });
  });

  it('renders correctly', () => {
    expect(
      screen.getByRole('heading', { level: 3, name: /Sample/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { level: 4, name: /example title/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole('article')).toBeInTheDocument();

    expect(blogLink).toBeInTheDocument();
  });

  it('should link to a 404 page', async () => {
    const user = userEvent.setup();
    const blogArticle = screen.queryByRole('article');

    expect(blogArticle).toBeInTheDocument();

    await user.click(blogLink);

    expect(blogArticle).not.toBeInTheDocument();

    expect(
      screen.getByRole('heading', { level: 1, name: /404/i }),
    ).toBeInTheDocument();
  });
});
