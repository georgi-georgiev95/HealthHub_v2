import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import RecipeGridCard from './RecipeGridCard';
import UserProvider from '../../../../contexts/UserProvider';

const renderRecipeGridCard = () => {
    render(
        <UserProvider>
            <BrowserRouter>
                <RecipeGridCard
                    recipeData={{
                        id: '1',
                        image: 'https://example.com/image.jpg',
                        title: 'Recipe Title',
                        difficulty: 1,
                        ownerName: 'Owner Name',
                    }}
                />
            </BrowserRouter>
        </UserProvider>
    );
};

describe('RecipeGridCard Component', () => {
    it('renders correctly', () => {
        renderRecipeGridCard();
        expect(screen.getByText('Recipe Title')).toBeInTheDocument();
        expect(screen.getByText('Difficulty: ⭐')).toBeInTheDocument();
        expect(screen.getByText('Added by: Owner Name')).toBeInTheDocument();
    });
});