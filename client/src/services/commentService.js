import { getDocs, getDoc, collection, setDoc, doc, updateDoc, deleteDoc, query, where } from "firebase/firestore";
import { firebaseAuth } from "../config/firebase";

export const createComment = async (commentData) => {
    try {
        const commentDocRef = doc(collection(firebaseAuth.db(), "comments"));
        await setDoc(commentDocRef, commentData);
    } catch (error) {
        console.log(error);
    }
};

export const getAllComments = async (entityId, setComments) => {
    try {
        const commentsCollection = collection(firebaseAuth.db(), "comments");
        const commentsQuery = query(commentsCollection, where("entityId", "==", entityId));
        const commentsSnapshot = await getDocs(commentsQuery);
        const commentsList = commentsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setComments(commentsList);
    } catch (error) {
        console.log(error);
    }
};

export const editComment = async (commentId, commentData) => {
    try {
        const commentDocRef = doc(firebaseAuth.db(), "comments", commentId);
        await updateDoc(commentDocRef, commentData);
    } catch (error) {
        console.log(error);
    }
};

export const deleteComment = async (commentId) => {
    try {
        const commentDocRef = doc(firebaseAuth.db(), "comments", commentId);
        await deleteDoc(commentDocRef);
    } catch (error) {
        console.log(error);
    }
};

export const setReaction = async (userId, commentId, reaction) => {
    try {
        const commentDocRef = doc(firebaseAuth.db(), "comments", commentId);
        const commentSnapshot = await getDoc(commentDocRef);
        const commentData = commentSnapshot.data();
        const reactions = commentData.reactions || [];

        if (reactions.some((r) => r.userId === userId)) {
            if (reactions.some((r) => r.userId === userId && r.reaction === reaction)) {
                await updateDoc(commentDocRef, {
                    reactions: reactions.filter((r) => r.userId !== userId),
                })
            } else {
                await updateDoc(commentDocRef, {
                    reactions: reactions.map((r) => r.userId === userId ? { userId, reaction } : r),
                });
            }
        } else {
            await updateDoc(commentDocRef, {
                reactions: [...reactions, {
                    userId,
                    reaction
                }],
            });
        }

    } catch (error) {
        console.log(error);
    }
}