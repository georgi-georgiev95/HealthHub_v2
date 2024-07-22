import { useState, useEffect } from 'react';
import { useComments } from '../contexts/CommentsContext';
import { getAllComments } from '../services/commentService';

const useFetch = (callback, id, userId) => {
    const [data, setData] = useState(id ? {} : []);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isCommentCreated, isCommentEdited, isCommentDeleted, createCommentHandler, editCommentHandler, deleteCommentHandler } = useComments();

    useEffect(() => {
        (async () => {
            try {
                createCommentHandler(false);
                editCommentHandler(false);
                deleteCommentHandler(false);
                if (id) {
                    await callback(id, setData);
                    await getAllComments(id, setComments);
                } else {
                    await callback(setData);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, [id, isCommentCreated, isCommentEdited, isCommentDeleted]);

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
