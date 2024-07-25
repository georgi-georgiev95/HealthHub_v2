import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import EditCommentModal from './EditCommentModal';
import UserProvider from '../../../contexts/userContext/UserProvider';
import CommentsProvider from '../../../contexts/commentsContext/CommentsProvired';

const renderEditCommentModal = () => {
    render(
        <UserProvider>
            <CommentsProvider>
                <BrowserRouter>
                    <EditCommentModal
                        isOpen={true}
                        onClose={() => {}}
                        commentData={{}}
                        setCommentData={() => {}}
                    />
                </BrowserRouter>
            </CommentsProvider>
        </UserProvider>
    );
};

describe('EditCommentModal Component', () => {
    beforeEach(() => {
        renderEditCommentModal();
    })

    it('should render correctly', () => { 
        expect(screen.getByText('Edit Comment')).toBeInTheDocument();
        expect(screen.getByText('Save')).toBeInTheDocument();
    });

})