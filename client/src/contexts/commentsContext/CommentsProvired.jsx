// !REPLACED WITH REDUX TOOLKIT

import { useState } from "react";

import CommentsContext from "./CommentsContext";

const CommentsProvider = ({ children }) => {
  const [isCommentCreated, setIsCommentCreated] = useState(false);
  const [isCommentEdited, setIsCommentEdited] = useState(false);
  const [isCommentDeleted, setIsCommentDeleted] = useState(false);
  const [isReacted, setIsReacted] = useState(false);

  const createCommentHandler = (newState) => {
    setIsCommentCreated(newState);
  };
  const editCommentHandler = (newState) => {
    setIsCommentEdited(newState);
  };
  const deleteCommentHandler = (newState) => {
    setIsCommentDeleted(newState);
  };

  const handleReaction = () => {
    setIsReacted(!isReacted);
  };

  return (
    <CommentsContext.Provider
      value={{
        isCommentCreated,
        isCommentEdited,
        isCommentDeleted,
        isReacted,
        createCommentHandler,
        editCommentHandler,
        deleteCommentHandler,
        handleReaction,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
