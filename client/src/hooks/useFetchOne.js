import { useState, useEffect } from 'react';
import { useComments } from '../contexts/CommentsContext';
import { getAllComments } from '../services/commentService';


const useFetchOne = (id, userId, callback) => {
    const [data, setData] = useState({});
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isCommentCreated, isCommentEdited, isCommentDeleted, createCommentHandler, editCommentHandler, deleteCommentHandler } = useComments();


    useEffect(() => {
        (async () => {
          try {
            createCommentHandler(false);
            editCommentHandler(false);
            deleteCommentHandler(false);
            await callback(id, setData);
            await getAllComments(id, setComments);
          } catch (error) {
            console.error("Error fetching recipe:", error);
          } finally {
            setLoading(false);
          }
        })();
      }, [id, isCommentCreated, isCommentEdited, isCommentDeleted]);

      const setDataHandler = (prevRecipe) => {
        const userHasLiked = prevRecipe.likes.includes(user.userId);
        const updatedLikes = userHasLiked
          ? prevRecipe.likes.filter((like) => like !== user.userId)
          : [...prevRecipe.likes, user.userId];

        return { ...prevRecipe, likes: updatedLikes };
      }

      return { data, comments, loading, setDataHandler };
};

export default useFetchOne;

