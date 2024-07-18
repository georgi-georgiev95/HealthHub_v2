import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Catalog from './Catalog';
import UserProvider from '../../../contexts/UserProvider';

const renderCatalogComponent = () => {
    render(
        <UserProvider>
            <BrowserRouter>
                <Catalog />
            </BrowserRouter>
        </UserProvider>
    );
};

describe('Catalog Component', () => {
    beforeEach(() => {
        renderCatalogComponent();
    });

    it('renders correctly', () => {
        expect(screen.getByText('Explore our catalog')).toBeInTheDocument();
    });

    it('renders links to catalog pages', () => {
        const links = screen.getAllByRole('link');
        expect(links).toHaveLength(2);
    });

    it('links navigate to catalog pages', () => {
        const links = screen.getAllByRole('link');
        expect(links[0]).toHaveAttribute('href', '/catalog/recipes');
        expect(links[1]).toHaveAttribute('href', '/catalog/workouts');
    });
});
