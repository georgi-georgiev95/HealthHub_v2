import styles from './CommentSection.module.css';
import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/CreateComment';
import DeleteCommentModal from '../DeleteCommentModal/DeleteCommentModal';
import EditCommentModal from '../EditCommentModal/EditCommentModal';
import useComments from '../../../hooks/useComments';


const CommentSection = ({ comments }) => {
    const {
      isOpenEditModal,
      isOpenDeleteModal,
      sortCriteria,
      sortedComments,
      currentComment,
      handleSortChange,
      openEditModal,
      openDeleteModal,
      closeEditModal,
      closeDeleteModal,
      setCurrentComment,
    } = useComments(comments);


     return (
       <div className={styles.container}>
         <h3>{comments.length} comments</h3>
         <CreateComment />
         <div className={styles.sort}>
           <p>Sort by:</p>
           <select value={sortCriteria} onChange={handleSortChange}>
             <option value="newest">Newest</option>
             <option value="oldest">Oldest</option>
             <option value="interactions">Most Interactions</option>
           </select>
         </div>
         {sortedComments.map((comment) => (
           <Comment
             key={comment.id}
             commentData={comment}
             onEdit={() => openEditModal(comment)}
             onDelete={() => openDeleteModal(comment)}
           />
         ))}
         <EditCommentModal
           isOpen={isOpenEditModal}
           onClose={closeEditModal}
           commentData={currentComment}
           setCommentData={(data) => setCurrentComment(data)}
         />
         <DeleteCommentModal
           isOpen={isOpenDeleteModal}
           onClose={closeDeleteModal}
           commentData={currentComment}
           setCommentData={(data) => setCurrentComment(data)}
         />
       </div>
     );
};

export default CommentSection;
