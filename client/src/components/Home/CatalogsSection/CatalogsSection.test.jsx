import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CatalogsSection from './CatalogsSection';

describe('CatalogsSection Component', () => {
  test('renders the heading', () => {
    render(
      <BrowserRouter>
        <CatalogsSection />
      </BrowserRouter>
    );
    expect(screen.getByText('Discover More')).toBeInTheDocument();
  });

  test('renders the paragraph', () => {
    render(
      <BrowserRouter>
        <CatalogsSection />
      </BrowserRouter>
    );
    expect(screen.getByText(/Explore our catalog of recipes and workouts/i)).toBeInTheDocument();
  });

  test('renders the link to the catalog', () => {
    render(
      <BrowserRouter>
        <CatalogsSection />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole('link', { name: /Go to Catalog/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/catalog');
  });
});
