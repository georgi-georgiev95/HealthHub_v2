import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeFeatureCard from './HomeFeatureCard';

describe('HomeFeatureCard Component', () => {
  const props = {
    destination: '/destination',
    imageUrl: 'https://example.com/image.jpg',
    title: 'Feature Title',
    message: 'Feature message',
  };

  test('renders the image', () => {
    render(
      <BrowserRouter>
        <HomeFeatureCard {...props} />
      </BrowserRouter>
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', props.imageUrl);
  });

  test('renders the title', () => {
    render(
      <BrowserRouter>
        <HomeFeatureCard {...props} />
      </BrowserRouter>
    );
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  test('renders the message', () => {
    render(
      <BrowserRouter>
        <HomeFeatureCard {...props} />
      </BrowserRouter>
    );
    expect(screen.getByText(props.message)).toBeInTheDocument();
  });

  test('renders the link with correct destination', () => {
    render(
      <BrowserRouter>
        <HomeFeatureCard {...props} />
      </BrowserRouter>
    );
    const linkElement = screen.getByRole('link', { name: /Start Now/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', props.destination);
  });
});
