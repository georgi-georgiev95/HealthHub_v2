import { useState, useEffect } from 'react';
import { useComments } from '../contexts/commentsContext/CommentsContext';
import { getAllComments } from '../services/commentService';

const useFetch = (callback, id, userId) => {
    const [data, setData] = useState(id ? {} : []);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isCommentCreated, isCommentEdited, isCommentDeleted, isReacted, createCommentHandler, editCommentHandler, deleteCommentHandler } = useComments();

    useEffect(() => {
        (async () => {
            try {
                createCommentHandler(false);
                editCommentHandler(false);
                deleteCommentHandler(false);
                if (id) {
                    const data = await callback(id);
                    const comments = await getAllComments(id);
                    setData(data);
                    setComments(comments);
                } else {
                    const data = await callback(setData);
                    setData(data);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id, isCommentCreated, isCommentEdited, isCommentDeleted, isReacted]);

    const setDataHandler = (prevData) => {
        const userHasLiked = prevData.likes.includes(userId);
        const updatedLikes = userHasLiked
            ? prevData.likes.filter((like) => like !== userId)
            : [...prevData.likes, userId];

        return { ...prevData, likes: updatedLikes };
    };

    return { data, comments, loading, setDataHandler };
};

export default useFetch;
