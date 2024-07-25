import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ReactSection from './ReactionSection';
import UserProvider from '../../../contexts/userContext/UserProvider';
import CommentsProvider from '../../../contexts/commentsContext/CommentsProvired';

const renderReactionSection = () => render(
    <UserProvider>
        <CommentsProvider>
            <BrowserRouter>
                <ReactSection
                    commentData={{
                        id: 1,
                        reactions: [
                            {
                                userId: "1",
                                reaction: "like"
                            }
                        ] 
                    }}
                    userId="1"
                />
            </BrowserRouter>
        </CommentsProvider>
    </UserProvider>
);

describe('ReactionSection Component', () => {
    beforeEach(() => {
        renderReactionSection();
    });

    it('should render correctly', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(4);
    });
})