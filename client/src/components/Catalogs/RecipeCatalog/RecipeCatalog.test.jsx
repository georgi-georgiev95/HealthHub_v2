import {render, screen} from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {BrowserRouter} from 'react-router-dom';


import RecipeCatalog from './RecipeCatalog';
import UserProvider from '../../../contexts/userContext/UserProvider';
import CommentsProvider from '../../../contexts/commentsContext/CommentsProvired';
import useFetch from '../../../hooks/useFetch';

vi.mock('../../../hooks/useFetch');


const renderRecipeCatalog = () => {
    return render(
        <UserProvider>
            <CommentsProvider>
                <BrowserRouter>
                    <RecipeCatalog />
                </BrowserRouter>
            </CommentsProvider>
        </UserProvider>
    );
}

describe('RecipeCatalog Component', () => {
    it('renders correctly', () => {
        useFetch.mockReturnValue({
            data: [],
        })
        renderRecipeCatalog();
        expect(screen.getByText('Recipes')).toBeInTheDocument();
        expect(screen.getByText("For everyone's taste!")).toBeInTheDocument();
    });

    it('renders no recipes message correctly', () => {
        useFetch.mockReturnValue({
            data: [],
        })
        renderRecipeCatalog();
        expect(screen.getByText('No recipes found.')).toBeInTheDocument();
    });

    it('renders recipes correctly', () => {
        useFetch.mockReturnValue({
            data: [
                {
                    id: 1,
                    title: 'Recipe 1',
                    description: 'Description 1',
                    ingredients: 'Ingredients 1',
                    instructions: 'Instructions 1',
                    difficulty: 'Easy',
                    ownerName: 'John Doe',
                },
                {
                    id: 2,
                    title: 'Recipe 2',
                    description: 'Description 2',
                    ingredients: 'Ingredients 2',
                    instructions: 'Instructions 2',
                    difficulty: 'Medium',
                    ownerName: 'Jane Smith',
                },
            ],
        })
        renderRecipeCatalog();
        expect(screen.getByText('Recipe 1')).toBeInTheDocument();
        expect(screen.getByText('Recipe 2')).toBeInTheDocument();
    });
})