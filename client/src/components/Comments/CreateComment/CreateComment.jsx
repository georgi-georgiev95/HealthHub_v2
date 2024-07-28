import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CreateComment.module.css'
import { createComment } from "../../../services/commentService";
import { toggleIsCommentInteracted } from '../../../store/slices/commentsSlice';

const CreateComment = () => {
    const [comment, setComment] = useState({
        text: '',
        ownerId: '',
        ownerName: '',
        entityId: '',
        createdAt: '',
        editAt: '',
    });

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const { id } = useParams();
    const navigate = useNavigate();

    const formSubmitHandler = async (e) => {
        e.preventDefault();

        if (comment.text === '') {
            return;
        }

        if(user === null) {
            navigate('/users/login');
            return;
        }
        
        dispatch(toggleIsCommentInteracted());
        await createComment(comment);
        setComment({ text: '', ownerId: '', ownerName: '', entityId: '' });
    };

    return (
        <form className={styles.commentForm} onSubmit={(e) => formSubmitHandler(e)}>
            <div className={styles.field}>
                <textarea
                    type="text"
                    placeholder='Add your comment...'
                    value={comment.text}
                    required
                    onChange={(e) => setComment({ ...comment, text: e.target.value, ownerId: user?.userId, ownerName: user?.username, entityId: id, createdAt: new Date() })}
                />
            </div>
            <div className={styles.buttons}>
                <input type="submit" value={'Post'} />
            </div>
        </form>
    )
};

export default CreateComment;