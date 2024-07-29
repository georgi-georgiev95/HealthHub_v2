import { useState, useEffect } from 'react';
import commentsSorter from '../utils/commentsSorter';

const useComments = (initialComments) => {
    const [isOpenEditModal, setIsOpenEditModal] = useState(false);
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
    const [sortCriteria, setSortCriteria] = useState('newest');
    const [sortedComments, setSortedComments] = useState(initialComments);
    const [currentComment, setCurrentComment] = useState(null);

    useEffect(() => {
        setSortedComments(commentsSorter(initialComments, sortCriteria));
    }, [initialComments, sortCriteria]);

    const handleSortChange = (event) => {
        setSortCriteria(event.target.value);
    };

    const openEditModal = (comment) => {
        setCurrentComment(comment);
        setIsOpenEditModal(true);
    };

    const openDeleteModal = (comment) => {
        setCurrentComment(comment);
        setIsOpenDeleteModal(true);
    };

    return {
        isOpenEditModal,
        isOpenDeleteModal,
        sortCriteria,
        sortedComments,
        currentComment,
        handleSortChange,
        openEditModal,
        openDeleteModal,
        closeEditModal: () => setIsOpenEditModal(false),
        closeDeleteModal: () => setIsOpenDeleteModal(false),
        setCurrentComment,
    };
};

export default useComments;
