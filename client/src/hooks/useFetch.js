import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAllComments } from '../services/commentService';

const useFetch = (callback, id, userId) => {
    const [data, setData] = useState(id ? {} : []);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const isCommentInteracted = useSelector(state => state.comments.isCommentInteracted);

    useEffect(() => {
        (async () => {
            try {
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
    }, [id, isCommentInteracted]);

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
