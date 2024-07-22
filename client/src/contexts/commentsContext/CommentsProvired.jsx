import { useState } from 'react';

import CommentsContext from './CommentsContext';

const CommentsProvider = ({ children }) => {
    const [isCommentCreated, setIsCommentCreated] = useState(false);
    const [isCommentEdited, setIsCommentEdited] = useState(false);
    const [isCommentDeleted, setIsCommentDeleted] = useState(false);

    const createCommentHandler = (newState) => {
        setIsCommentCreated(newState);
    };
    const editCommentHandler = (newState) => {
        setIsCommentEdited(newState);
    };
    const deleteCommentHandler = (newState) => {
        setIsCommentDeleted(newState);
    };

    return (
        <CommentsContext.Provider value={{
            isCommentCreated,
            isCommentEdited,
            isCommentDeleted,
            createCommentHandler,
            editCommentHandler,
            deleteCommentHandler
        }}>
            {children}
        </CommentsContext.Provider>
    );
};

export default CommentsProvider;