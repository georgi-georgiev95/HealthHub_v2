import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CreateComment from './CreateComment';
import UserProvider from '../../../contexts/userContext/UserProvider';
import CommentsProvider from '../../../contexts/commentsContext/CommentsProvired';


const renderCreateComment = () => {
    render(
        <UserProvider>
            <CommentsProvider>
                <BrowserRouter>
                    <CreateComment />
                </BrowserRouter>
            </CommentsProvider>
        </UserProvider>
    )
};

describe('CreateComment Component', () => {
    beforeEach(() => {
        renderCreateComment();
    });

    it('should render correctly', () => {
    });

    it('should render textarea', () => {
        expect(screen.getByPlaceholderText('Add your comment...')).toBeInTheDocument();
    });

    it('should render button', () => {
        expect(screen.getByText('Post')).toBeInTheDocument();
    });
})