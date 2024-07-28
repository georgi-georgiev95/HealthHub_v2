import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';

import styles from './CreateComment.module.css'
import { createComment } from "../../../services/commentService";
import { useComments } from '../../../contexts/commentsContext/CommentsContext';

const CreateComment = () => {
    const [comment, setComment] = useState({
        text: '',
        ownerId: '',
        ownerName: '',
        entityId: '',
        createdAt: '',
        editAt: '',
    });

    const user = useSelector(state => state.auth.user);
    const { createCommentHandler } = useComments();
    const { id } = useParams();

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        if (comment.text === '') {
            return;
        }
        createCommentHandler(true);
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
                    onChange={(e) => setComment({ ...comment, text: e.target.value, ownerId: user.userId, ownerName: user.username, entityId: id, createdAt: new Date() })}
                />
            </div>
            <div className={styles.buttons}>
                <input type="submit" value={'Post'} />
            </div>
        </form>
    )
};

export default CreateComment;