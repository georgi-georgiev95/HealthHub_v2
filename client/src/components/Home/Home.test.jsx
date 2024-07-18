import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Home from './Home';

vi.mock('./HeroSection/HeroSection', () => ({
  default: () => <div>HeroSection Mock</div>,
}));
vi.mock('./FeaturesSection/FeaturesSection', () => ({
  default: () => <div>FeaturesSection Mock</div>,
}));
vi.mock('./CatalogsSection/CatalogsSection', () => ({
  default: () => <div>CatalogsSection Mock</div>,
}));

describe('Home Component', () => {
  test('renders HeroSection, FeaturesSection, and CatalogsSection', () => {
    render(<Home />);
    expect(screen.getByText('HeroSection Mock')).toBeInTheDocument();
    expect(screen.getByText('FeaturesSection Mock')).toBeInTheDocument();
    expect(screen.getByText('CatalogsSection Mock')).toBeInTheDocument();
  });
});
