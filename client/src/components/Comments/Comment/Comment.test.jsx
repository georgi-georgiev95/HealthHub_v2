import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Comment from './Comment';
import UserProvider from '../../../contexts/userContext/UserProvider';
import CommentsProvider from '../../../contexts/commentsContext/CommentsProvired';

const renderComment = () => {
    return render(
      <UserProvider>
        <CommentsProvider>
          <BrowserRouter>
            <Comment
              commentData={{
                text: "text",
                ownerName: "ownerName",
                ownerId: "ownerId",
                createdAt: new Date(),
                editAt: new Date(),
              }}
              setIsOpenEditModal={vi.fn()}
              setComment={vi.fn()}
              setIsOpenDeleteModal={vi.fn()}
            />
          </BrowserRouter>
        </CommentsProvider>
      </UserProvider>
    );
};

describe('Comment Component', () => {
    it('should render correctly', () => {
        renderComment();
    });

    it('should render text', () => {
        renderComment();
        expect(screen.getByText('text')).toBeInTheDocument();
    });

    it('should render owner name', () => {
        renderComment();
        expect(screen.getByText('by ownerName')).toBeInTheDocument();
    });

})